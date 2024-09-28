declare module 'qr-code-with-logo' {
  interface QRCodeOptions {
    canvas?: HTMLCanvasElement;
    content: string;
    width?: number;
    logo?: string | {
      src: string;
      crossOrigin?: string;
    };
    [key: string]: any;
  }

  export function toCanvas(options: QRCodeOptions): Promise<void>;
}