import { HLTV } from './index'

const log = (promise: Promise<any>) =>
  promise
    .then((res) => console.dir(res, { depth: null }))
    .catch((err) => console.log(err))

log(HLTV.getMatch({ id: 2353983 }))
// log(HLTV.getMatches())
// log(HLTV.getEvent({ id: 2353966 }))
// log(HLTV.getEvents())
// log(HLTV.getMatchMapStats({ id: 2353983 }))
// log(HLTV.getMatchStats({ id: 2353983 }))
// log(HLTV.getPlayer({ id: 7998 }))
// log(HLTV.getPlayerRanking())
// log(HLTV.getPlayerStats({ id: 7998 }))
// log(HLTV.getRecentThreads())
// log(HLTV.getStreams())
// log(HLTV.getTeam({ id: 4608 }))
// log(HLTV.getTeamStats({ id: 4608 }))
// log(HLTV.getPastEvents({ startDate: '2019-3-1', endDate: '2019-3-29' }))
// log(HLTV.getTeamRanking())
// log(HLTV.getResults({ eventIds: [1617] }))
// log(HLTV.getNews())
