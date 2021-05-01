import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="add_question">
            <Link to="/questions/aq" >
                <button>AQ</button>
            </Link>
            <Link to="/questions/dp" >
                <button>DP</button>
            </Link>
            <Link to="/questions/tree" >
                <button>Tree</button>

            </Link>
            <Link to="/questions/greedy" >
                <button>Greedy</button>
            </Link>
            <Link to="/questions/graph" >
                <button>Graph</button>
            </Link>
            <Link to="/questions/linklist" >
                <button>LinkList</button>
            </Link>
            <Link to="/add-question" >
                <button>
                    Add Question
                </button>
            </Link>
        </div>
    )
}

export default Home
