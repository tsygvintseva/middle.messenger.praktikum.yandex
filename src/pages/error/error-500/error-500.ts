import Block from '../../../modules/block';
import errorTmpl from './error-500.tmpl';
import '../error.scss';

interface ErrorProps {
  code: string,
  desc: string
}

export class Error500 extends Block {
  constructor(props?: ErrorProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(errorTmpl, this.props);
  }
}
