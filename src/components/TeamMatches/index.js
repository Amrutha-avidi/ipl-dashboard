// Write your code here
import {Component} from 'react'
// import {Redirect} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import PieChart from '../PieChart'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchData()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattingData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({teamMatchData: formattingData, isLoading: false})
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SRH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  goBack = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    const {teamMatchData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchData
    return isLoading ? (
      <div>
        <Loader
          testid="loader"
          type="Oval"
          color="#00BFFF"
          height={50}
          width={50}
        />
      </div>
    ) : (
      <div className={`team-details-con ${this.getRouteClassName()}`}>
        <button type="button" className="back-button" onClick={this.goBack}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </button>
        <img className="banner-image" src={teamBannerUrl} alt="team banner" />
        <LatestMatch latestMatchData={latestMatchDetails} />
        <ul className="card-con">
          {recentMatches.map(eachMatch => (
            <div key={eachMatch.id}>
              <MatchCard matchCardDetails={eachMatch} />
            </div>
          ))}
        </ul>
        <PieChart
          recentMatches={recentMatches}
          latestMatchDetails={latestMatchDetails}
        />
      </div>
    )
  }
}
export default TeamMatches
