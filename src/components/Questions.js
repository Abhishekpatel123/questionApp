import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Card = ({ ques }) => {
    return (
        ques &&
        <Link style={{ textDecoration: "none", color: "black" }} to={`/questions/question/${ques._id}`} className="card">
            {ques.question}
        </Link>
    )
}

function Questions(props) {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios.get(`https://jatin-question-backend.herokuapp.com/questions/${props.match.params.type}`).then(async result => {
            console.log(result);
            let objs = result.data.questions;

            function compare(a, b) {
                if (a.question < b.question) {
                    return -1;
                }
                if (a.question > b.question) {
                    return 1;
                }
                return 0;
            }
            const sortedData = await objs.sort(compare);

            console.log(sortedData , "obj")
            setQuestions(sortedData);
        }).catch(err => console.log(err));
    }, [])


    return (
        <div className="add_question , home">
            {
                questions && questions.map((ques, idx) => {
                    return <Card ques={ques} />
                })
            }
        </div>
    )
}

export default Questions
