import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
function AddQuestion() {

    const [data, setData] = useState({
        question: "",
        code: "",
        questionType : ""
    });
    const history = useHistory()

    const handleChange = e => {
        setData(pre => {
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }

    const submit = e => {
        e.preventDefault();
        console.log(data);
        axios.post('https://jatin-question-backend.herokuapp.com/question', data).then(result => {
            console.log(result);
            alert("question added ");
            history.push('/');
        }).catch(err => console.log(err));
    }

    return (
        <div className="add_question">
            <h2>Add your Question</h2>
            <form onSubmit={submit} >
                <input
                    placeholder="Enter Type"
                    name="questionType"
                    value={data.questionType}
                    required
                    onChange={handleChange} />

                <input
                    placeholder="Enter Question"
                    name="question"
                    value={data.question}
                    required
                    onChange={handleChange} />
                <textarea
                    rows='4'
                    placeholder="Enter Code"
                    name="code"
                    required
                    value={data.code}
                    onChange={handleChange} />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddQuestion
