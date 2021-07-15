import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

    useEffect(() => {
      fetch("http://localhost:4000/questions")
      .then(resp => resp.json())
      .then(setQuestions)
      .then(() => console.log(questions))
    }, [])

    function handleDelete(id){
      console.log(id)
      fetch('http://localhost:4000/questions/' + id, {
        method: 'DELETE',
      })
      .then(res => res.json()) // or res.json()
      .then(() => setQuestions(questions.filter(question => question.id !== id)));
    }

    function handleUpdate(id){
      console.log(id.target.value, "id")
      fetch('http://localhost:4000/questions/' + id.target.value, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "correctIndex": questions.correctIndex
        })
      });
    }

  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((q) => <QuestionItem key={q.id} question={q} onChangeUpdate={handleUpdate} onClickDelete={() => handleDelete(q.id)}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
 