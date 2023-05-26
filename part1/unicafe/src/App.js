import {useState} from 'react'

const StatisticsLine = ({text, value}) => {
    return (
        <p>{text} {value}</p>
    )
}

const Statistics = ({stats}) => {
    const {good, neutral, bad} = stats
    const allClick = good + neutral + bad
    const average = (good - bad) / allClick
    const positive = (good * 100) / allClick
    if (allClick === 0) return <p>No feedback given</p>
    return (
        <div>
            <StatisticsLine text="Good" value={good}/>
            <StatisticsLine text="Neutral" value={neutral}/>
            <StatisticsLine text="Bad" value={bad}/>
            <StatisticsLine text="All" value={allClick}/>
            <StatisticsLine text="Average" value={average}/>
            <StatisticsLine text="Positive" value={positive + '%'}/>
        </div>
    )
}
const Button = ({text, handle}) => <button onClick={handle}>{text}</button>
const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => setGood(good + 1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)

    const group = {
        good: good,
        neutral: neutral,
        bad: bad
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button text='good' handle={handleGood}/>
            <Button text='neutral' handle={handleNeutral}/>
            <Button text='bad' handle={handleBad}/>
            <h1>statistics</h1>
            <Statistics stats={group}/>

        </div>
    )
}

export default App