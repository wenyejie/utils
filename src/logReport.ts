import { inBrowser } from './env'
import pick from './pick'

interface LogReportOptions {
  [any: string]: any
}

class LogReport {
  private options: any
  private methods: { add(): void; listener(event: ErrorEvent): void; remove(): void }[]
  constructor(options?: LogReportOptions) {
    const $this = this
    this.options = Object.assign(
      {
        immediate: false
      },
      options
    )

    this.methods = [
      {
        listener(event: ErrorEvent) {
          const queues = [
            (event: ErrorEvent) => {
              const target = event.target
              // @ts-ignore
              if (!target || !'img,link,script,video,audio'.includes(target.localName)) {
                return false
              }
              const data: Record<string, any> = pick(target, 'outerHTML', 'localName')
              if (data.localName === 'link') {
                // @ts-ignore
                data.href = target.href
              } else {
                // @ts-ignore
                data.src = target.src
              }
              data.type = 'ResourceError'
              return data
            },
            (event: ErrorEvent) => {
              const data: Record<string, any> = pick(
                event,
                'colno',
                'filename',
                'lineno',
                'message',
                'type'
              )
              if (event.error && event.error.message) {
                data.message = event.error.message
                data.stack = event.error.stack
              }
              if (/^([A-z]+Error)/.test(data.stack)) {
                data.type = RegExp.$1
              }
              return data
            }
          ]

          for (let i = 0; i < queues.length; i++) {
            const result = queues[i](event)
            if (result) {
              $this.report(result)
              break
            }
          }
        },

        add() {
          window.addEventListener('error', this.listener, true)
        },

        remove() {
          window.removeEventListener('error', this.listener, true)
        }
      },
      {
        listener(event: ErrorEvent) {
          $this.report(pick(event, 'type', 'reason'))
        },
        add() {
          window.addEventListener('unhandledrejection', this.listener)
        },
        remove() {
          window.removeEventListener('unhandledrejection', this.listener)
        }
      }
    ]

    if (this.options.immediate) {
      this.start()
    }
  }

  public start() {
    this.methods.forEach(item => item.add())
  }

  public clear() {
    this.methods.forEach(item => item.remove())
  }

  public report(data: Record<string, any>) {
    data = Object.assign(data, {
      userAgent: navigator.userAgent,
      language: navigator.language,
      url: location.href,
      cookieEnabled: navigator.cookieEnabled,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
      lastModified: document.lastModified,
      onLine: navigator.onLine,
      platform: navigator.platform
    })
    console.log('report: ', data)
  }

  static create(options?: LogReportOptions): LogReport {
    return new LogReport(options)
  }
}

export default () => {
  if (!inBrowser()) {
    return
  }

  window.addEventListener('error', (event: Event) => {
    console.log()
  })
}
