import {useState} from 'react'

const MostAnecdote = ({votes, anecdotes}) => {
    const bestVote = Math.max(...votes);

    if (bestVote > 0) {
        return (
            <>
                <p>{anecdotes[votes.indexOf(bestVote)]}</p>
                <p>Has {bestVote} votes</p>
            </>
        )
    }
    return <p>No anecdote has been voted on yet</p>
}
const App = () => {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

    const getAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
    const addVote = () => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>Has {votes[selected]} votes</p>
            <button onClick={addVote}>Vote</button>
            <button onClick={getAnecdote}>Next anecdote</button>
            <h1>Anecdote with most votes</h1>
            <MostAnecdote anecdotes={anecdotes} votes={votes}/>

        </div>
    )
}

export default App