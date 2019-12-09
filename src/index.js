import QrCodeWithLogo from "qr-code-with-logo";

/**
 * 生成二维码的base64图片数据
 * @param opts 二维码配置
 * @returns {Promise<string>} Image base64 data
 */
export const toQRCodeImageData = async opts => {
  const options = opts;
  const canvas = document.createElement('canvas');
  options.canvas = canvas;
  if (options.logo) {
    if (typeof options.logo === 'string') {
      options.logo = { src: options.logo };
    }
    options.logo.crossOrigin = 'Anonymous';
  }
  await QrCodeWithLogo.toCanvas(options);
  const imageData = canvas.toDataURL();
  return Promise.resolve(imageData);
};
