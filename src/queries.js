import {gql} from "@apollo/client";

const ScheduleQuery = gql`
query schedule($status:String!, $type: String!) {
  newSchedule(type: $type, status: $status, page: 1) {
    seriesID
    matchType
    seriesName
    seriesAvailable
    league
    matches {
      homeTeamName
      awayTeamName
      matchdate
      venue
      matchNumber
      teamsWinProbability {
        homeTeamShortName
        homeTeamPercentage
        awayTeamShortName
        awayTeamPercentage
        tiePercentage
      }
      
    }
  }
}
`
export default ScheduleQuery;