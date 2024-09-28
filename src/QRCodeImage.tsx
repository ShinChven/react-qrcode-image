import React, { useState, useEffect } from 'react';
import { toQRCodeImageData, QRCodeOptions } from "./qrCodeUtils";

interface QRCodeImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  options: QRCodeOptions;
}

const QRCodeImage: React.FC<QRCodeImageProps> = ({ options, ...props }) => {
  const [src, setSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    toQRCodeImageData(options).then(setSrc);
  }, [options]);

  return <img {...props} alt={props.alt || "qr-code"} src={src} />;
};

export default QRCodeImage;