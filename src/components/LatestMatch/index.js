// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    result,
    venue,
    umpires,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = latestMatchData

  return (
    <div className="latest-match">
      <p className="latest-match-head">Latest Match</p>
      <div className="latest-match-con">
        <div className="date-con">
          <p className="competing-team">{competingTeam}</p>
          <p>{date}</p>
          <p className="details">{venue}</p>
          <p className="details">{result}</p>
        </div>
        <img
          className="team-img"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />

        <div className="inning-con">
          <p className="details-head">First Innings</p>
          <p className="details">{firstInnings}</p>
          <p className="details-head">Second Innings</p>
          <p className="details">{secondInnings}</p>
          <p className="details-head">Man of the Match</p>
          <p className="details">{manOfTheMatch}</p>
          <p className="details-head">Umpires</p>
          <p className="details">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
