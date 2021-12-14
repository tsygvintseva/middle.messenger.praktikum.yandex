import Block from '../../../modules/block';
import errorTmpl from './error-404.tmpl';
import '../error.scss';

interface ErrorProps {
  code: string,
  desc: string
}

export class Error404 extends Block {
  constructor(props?: ErrorProps) {
    super(props);
  }

  render(): Element {
    return <Element>this.compile(errorTmpl, this.props);
  }
}
