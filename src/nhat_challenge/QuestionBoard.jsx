import React from 'react'
import { dataQuestions, dataSubmissions } from '../mock_data/dataQuestionBoard'

export default function QuestionBoard(){
    const [questions, setQuestions] = React.useState(null)
    const sleep = (time) => {
        return new Promise(resovle => setTimeout(resovle, time))
      }
    React.useEffect(() => {
        async function fetchQuestion(){
            await sleep(500);
            const data = dataQuestions.reduce((acc,curr) => {
                if(!acc[curr.category]){
                    acc[curr.category] = []
                }
                acc[curr.category].push(curr)
                return acc;
            }, {});
            setQuestions(data)
        }
        fetchQuestion();
    })

    return (
        <div>
            <div className="question_board">
                {
                    Object.keys(questions || {}).map(key => {
                        const interview = questions[key];
                        return (
                            <div key={key} className="column">
                                <h2>{key} - 1 / {interview.length}</h2>
                                {interview.map(interview =>{
                                    const submitItem = dataSubmissions.find(sub => sub.questionId === interview.id)
                                    const status = submitItem ? submitItem.status : 'none';
                                    return (
                                        <div key={interview.id} className="boards">
                                            <div className="question">
                                                <div className={`question__status question__status--${status}`}></div>
                                                <h2 className="question__title">{interview.name}</h2>
                                            </div>                           
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}