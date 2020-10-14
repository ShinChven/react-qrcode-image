# react-qrcode-image

- 基于 [qr-code-with-logo](https://www.npmjs.com/package/qr-code-with-logo)扩展，options 请参考[此库文档](https://www.npmjs.com/package/qr-code-with-logo#%E4%BA%8C%E3%80%81%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95%EF%BC%9A)；
- qrcode 可输出 base64 数据；
- react 控件基于 img 标签，支持微信内长按识别，options 参数以外，所有 props 向 img 传递；
- Extending [qr-code-with-logo](https://www.npmjs.com/package/qr-code-with-logo) to export qrcode as base64 data and to be used as a component based on img tag not canvas;
- Please checkout options documentation at [the original library's page](https://www.npmjs.com/package/qr-code-with-logo#%E4%BA%8C%E3%80%81%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95%EF%BC%9A);

## install 

[![npm version](http://img.shields.io/npm/v/react-qrcode-image.svg)](https://npmjs.org/package/react-qrcode-image)

```bash
npm install react-qrcode-image
```

## 输出/export base64

```js
toQRCodeImageData(options);
```

## React 控件/component

```jsx
class Example extends React.PureComponent{
  render(){
      return (
          <QRCodeImage
              options={options}
              // ... other props that used by img tag / 其他img 标签的属性
          />
      )
  }
}

```
