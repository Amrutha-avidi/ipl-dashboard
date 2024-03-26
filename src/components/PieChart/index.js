import {PieChart as PieChartComponent, Pie, Cell, Legend} from 'recharts'

const PieChart = ({recentMatches, latestMatchDetails}) => {
  console.log(recentMatches)
  console.log(latestMatchDetails)
  const wins = recentMatches.filter(
    eachMatch => eachMatch.matchStatus === 'Won',
  )
  const losts = recentMatches.filter(
    eachMatch => eachMatch.matchStatus === 'Lost',
  )

  let winsLength = wins.length
  let lostsLength = losts.length

  if (latestMatchDetails.matchStatus === 'Won') {
    winsLength += 1
  } else {
    lostsLength += 1
  }

  const winPer = Math.ceil((winsLength / recentMatches.length) * 100)
  const losePer = Math.ceil((lostsLength / recentMatches.length) * 100)

  const statistics = [
    {
      count: winsLength,
      name: 'Win',
    },
    {
      count: lostsLength,
      name: 'Lose',
    },
  ]

  return (
    <div>
      <h1>Performance Statistics</h1>
      <PieChartComponent width={1000} height={400}>
        <Pie
          cx="55%"
          cy="40%"
          data={statistics}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name={`Win ${winPer} %`} fill="red" />
          <Cell name={`Win ${losePer} %`} fill="green" />
        </Pie>

        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChartComponent>
    </div>
  )
}

export default PieChart
