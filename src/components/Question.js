import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Question(props) {
    const [question, setQuestion] = useState({})
    useEffect(() => {
        console.log(props.match)
        axios.get(`https://jatin-question-backend.herokuapp.com/get-question/${props.match.params.id}`).then(result => {
            console.log(result)
            setQuestion(result.data.question)
        })
    }, [])
    return (
        <div className="add_question" style={{ width: "100%", padding: "20px 0" }}>
            {
                question &&
                <>
                    <h3>{question.question}</h3>
                    <pre style = {{fontSize : "15px" , width : "100%"}}>
                        <code>
                            {question.code}
                        </code>
                    </pre>
                </>
            }
        </div>
    )
}

export default Question