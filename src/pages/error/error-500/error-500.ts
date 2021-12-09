import Block from '../../../modules/block';
import errorTmpl from './error-500.tmpl';
import '../error.scss';

const ERROR_DATA = {
  errorCode: '500',
  errorDesc: 'Мы уже фиксим',
}

export class Error500 extends Block {
  constructor(props?: any) {
    super(props);
  }

  componentDidMount(): void {
    this.setProps(ERROR_DATA);
  }

  render(): Element {
    // @ts-ignore
    return this.compile(errorTmpl, this.props);
  }
}
