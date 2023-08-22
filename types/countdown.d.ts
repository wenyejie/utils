interface CountdownOptions {
  timeout?: number;
  autostart?: boolean
  padStart?: boolean
  change?(...rest: any[]): any
  start?(...rest: any[]): any
  stop?(...rest: any[]): any
  restart?(...rest: any[]): any
  end?(...rest: any[]): any
}

/**
 * 倒计时
 * @param second
 * @param options
 */
export declare class Countdown {
  private readonly second
  private readonly options
  private count
  private timer

  constructor(second: number, options?: CountdownOptions | CountdownOptions['change']);

  private callback

  loop(): void;

  restart(): void;

  start(): void;

  stop(): void;

  static create(second: number, options: CountdownOptions | CountdownOptions['change']): Countdown;
}

export declare const countdown: typeof Countdown.create
export default countdown
