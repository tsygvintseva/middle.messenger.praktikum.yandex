import Block from '../../../modules/block';
import errorTmpl from './error-404.tmpl';
import '../error.scss';

const ERROR_DATA = {
  errorCode: '404',
  errorDesc: 'Не туда попали',
}

export class Error404 extends Block {
  constructor(props?: any) {
    super(props);
  }

  componentDidMount(): void {
    this.setProps(ERROR_DATA);
  }

  render(): Element {
    return <Element>this.compile(errorTmpl, this.props);
  }
}
