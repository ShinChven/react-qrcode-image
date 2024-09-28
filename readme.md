# react-qrcode-image

A React component and utility functions for generating QR codes with optional logos, based on [qr-code-with-logo](https://www.npmjs.com/package/qr-code-with-logo).

## Features

- Generate QR codes as base64 image data
- React component `QRCodeImage` for easy integration in React applications
- Support for adding logos to QR codes
- Fully typed with TypeScript

## Installation

[![npm version](http://img.shields.io/npm/v/react-qrcode-image.svg)](https://npmjs.org/package/react-qrcode-image)

```bash
npm install react-qrcode-image
```

## Usage

### Generating QR Code as Base64 Image Data

```typescript
import { toQRCodeImageData, QRCodeOptions } from 'react-qrcode-image';

const options: QRCodeOptions = {
  content: 'https://example.com',
  width: 256,
  logo: 'https://example.com/logo.png'
};

toQRCodeImageData(options).then(base64Data => {
  console.log(base64Data);
});
```

### Using the React Component

```jsx
import React from 'react';
import { QRCodeImage } from 'react-qrcode-image';

const Example = () => {
  return (
    <QRCodeImage
      options={{
        content: 'https://example.com',
        width: 256,
        logo: 'https://example.com/logo.png'
      }}
      style={{ border: '1px solid #ccc' }}
    />
  );
};
```

## API Reference

### `toQRCodeImageData(options: QRCodeOptions): Promise<string>`

Generates a QR code and returns it as a base64-encoded image data URL.

### `QRCodeImage`

A React component that renders a QR code as an `<img>` element.

Props:
- `options: QRCodeOptions` - Configuration for the QR code
- All other props are passed directly to the underlying `<img>` element

### `QRCodeOptions`

An interface defining the options for QR code generation:

```typescript
interface QRCodeOptions {
  content: string;
  width?: number;
  logo?: string | {
    src: string;
    crossOrigin?: string;
  };
  [key: string]: any;
}
```

For detailed options, please refer to the [qr-code-with-logo documentation](https://www.npmjs.com/package/qr-code-with-logo#%E4%BA%8C%E3%80%81%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95%EF%BC%9A).

## Notes

- The `QRCodeImage` component is based on the `<img>` tag, which supports long-press recognition in WeChat.
- All props except `options` are passed directly to the `<img>` element.

## License

MIT

---

For more information or to report issues, please visit the [GitHub repository](https://github.com/yourusername/react-qrcode-image).
