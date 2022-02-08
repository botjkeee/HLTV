import { HLTVConfig } from '../config'
import { HLTVPage, HLTVPageElement, HLTVScraper } from '../scraper'
import {
  fetchPage,
  generateRandomSuffix,
  getIdAt,
  percentageToDecimalOdd
} from '../utils'

export const getAnalytics =
  (config: HLTVConfig) =>
  async ({ id }: { id: number }): Promise<any> => {
    const $ = HLTVScraper(
      await fetchPage(
        `https://www.hltv.org/betting/analytics/${id}/${generateRandomSuffix()}`,
        config.loadPage
      )
    )

    let obj: any = {}
    let globalMapName = ''
    const mapStats = $(
      '.analytics-map-stats .gtSmartphone-only tbody tr'
    ).toArray()

    mapStats.forEach((e) => {
      if (
        e.find('.analytics-map-name').exists() &&
        !obj[e.find('.analytics-map-name').text()]
      ) {
        obj[e.find('.analytics-map-name').text()] = {}
        globalMapName = e.find('.analytics-map-name').text()
      }
      obj[globalMapName][e.find('.maps-team-name').text()] = {
        fp: e.find('.analytics-map-stats-pick-percentage').text(),
        fb: e.find('.analytics-map-stats-ban-percentage').text(),
        win: e.find('.analytics-map-stats-win-percentage').text(),
        played: e.find('.analytics-map-stats-played').text()
      }
      //   obj[globalMapName].push({
      //     team: e.find('.maps-team-name').text(),
      //     fp: e.find('.analytics-map-stats-pick-percentage').text(),
      //     fb: e.find('.analytics-map-stats-ban-percentage').text(),
      //     win: e.find('.analytics-map-stats-win-percentage').text(),
      //     played: e.find('.analytics-map-stats-played').text()
      //   })
    })
    return obj
  }
