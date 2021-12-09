import * as Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import EventBus from './event-bus';

type Props = { [key: string]: any };

export default abstract class Block {
  _element: DocumentFragment;
  _nodes: Record<string, Block>;
  _id = '';

  eventBus: () => EventBus;
  props: Props = {};

  abstract render(): Element;

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  };

  protected constructor(props: Props = {}) {
    const eventBus = new EventBus();

    this._nodes = {};
    this._id = makeUUID();
    this.eventBus = () => eventBus;
    this.props = this._makePropsProxy({ ...props, id: this._id });

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources(): void {
    this._element = document.createDocumentFragment();
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(): void {}

  _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return oldProps !== newProps;
  }

  setProps({...nextProps}: Props): void {
    const previousProps = {...this.props};
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);

    this.eventBus().emit(Block.EVENTS.FLOW_CDU, previousProps, this.props);
  }

  get element(): Element | null {
    return this._element.firstElementChild;
  }

  getContent(): HTMLElement {
    return this.element as HTMLElement;
  }

  _render(): void {
    const block = this.render();
    this._removeEvents();
    this._element.textContent = '';
    this._element.appendChild(block);
    this._addEvents();
  }

  _addEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  _makePropsProxy(props: Props): Props {
    const self = this;
    return new Proxy(props, {
      get(target: Props, prop: string) {
        if (prop.indexOf('_') === 0) {
          throw new Error('Нет прав');
        }
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      set(target: Props, prop: string, value) {
        if (prop.indexOf('_') === 0) {
          throw new Error('Нет прав');
        }
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },

      deleteProperty(target: Props, prop: string) {
        if (prop.indexOf('_') === 0) {
          throw new Error('Нет прав');
        }
        delete target[prop];
        return true;
      },
    });
  }

  compile(tmpl: string, props: Props): Element | null {
    const template = Handlebars.compile(tmpl);

    Object.entries(props).forEach(([key, prop]) => {
      if (prop instanceof Block) {
        this._nodes[prop._id] = prop;
        props[key] = `<div data-id='${prop._id}'></div>`
      }
    });

    const fragment = document.createElement('template');

    fragment.innerHTML = template(props);

    Object.entries(this._nodes).forEach(([id, component]: [string, Block]) => {
      const stub = fragment.content.querySelector(`[data-id='${id}']`);

      if (!stub) {
        return;
      }

      stub.replaceWith(component.render());
    });

    return fragment.content.firstElementChild;
  }

  show(): void {
    this.getContent().style.display = 'block';
  }

  hide(): void {
    this.getContent().style.display = 'none';
  }
}
