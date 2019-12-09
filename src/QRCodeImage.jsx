import React, { PureComponent } from 'react';
import {toQRCodeImageData} from "./index";



export default class QRCodeImage extends PureComponent {
  state = {
    src: undefined,
  };

  componentDidMount() {
    const { options = {} } = this.props;
    toQRCodeImageData(options).then(src => {
      this.setState({ src });
    });
  }

  render() {
    return <img {...this.props} alt="qr-code" src={this.state.src} />;
  }
}
