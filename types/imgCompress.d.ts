export declare const file2img: (file: File) => Promise<HTMLImageElement>;
interface CreateCanvasResult {
    context: CanvasRenderingContext2D;
    $canvas: HTMLCanvasElement;
}
interface ImgCompressOptions {
    noCompressIfLarger?: boolean;
    maxWidth?: number;
    maxHeight?: number;
    fillStyle?: string;
    quality?: number;
}
export declare const createCanvas: (options: ImgCompressOptions) => Promise<CreateCanvasResult>;
export declare const calcDrawSize: ($img: HTMLImageElement, options: ImgCompressOptions) => {
    dw: number;
    dh: number;
    dx: number;
    dy: number;
    sx: number;
    sy: number;
    sw: number;
    sh: number;
};
export declare const canvas2file: ($canvas: HTMLCanvasElement, file: File, options: ImgCompressOptions) => Promise<File>;
/**
 * 图片压缩: 利用canvas对图片进行压缩
 * @param file
 * @param options
 */
declare const imgCompress: (file: File, options: ImgCompressOptions) => Promise<File>;
export default imgCompress;
