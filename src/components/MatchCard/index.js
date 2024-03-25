// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = matchCardDetails

  const statusClassName = status => (status === 'Won' ? 'won' : 'lost')

  return (
    <li className="card-container">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={statusClassName(matchStatus)}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
