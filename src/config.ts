import { Agent as HttpsAgent } from 'https'
import { Agent as HttpAgent } from 'http'
import * as request from 'request'
import randomUseragent from 'random-useragent'

export interface HLTVConfig {
  loadPage: (url: string) => Promise<string>
  httpAgent: HttpsAgent | HttpAgent
}

export const defaultLoadPage =
  (httpAgent: HttpsAgent | HttpAgent | undefined, proxy?: any) =>
  (url: string) =>
    new Promise<string>((resolve) => {
      request.get(
        url,
        {
          gzip: true,
          agent: httpAgent,
          headers: {
            'User-Agent': randomUseragent.getRandom((ue) =>
              [
                '/Browsers - Windows',
                '/Browsers - Linux',
                '/Browsers - Mac'
              ].includes(ue.folder)
            )
          }
        },
        (err, __, body) => {
          console.log(proxy)

          if (err) {
            throw err
          }

          resolve(body)
        }
      )
    })

const defaultAgent = new HttpsAgent()

export const defaultConfig: HLTVConfig = {
  httpAgent: defaultAgent,
  loadPage: defaultLoadPage(defaultAgent)
}
