import React, {useState} from "react";


function QuestionItem({ question, onClickDelete, onChangeUpdate}) {
  const { id, prompt, answers, correctIndex } = question;

  

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={onChangeUpdate}>{options}</select>
      </label>
      <button onClick={onClickDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
