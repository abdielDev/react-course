import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {
  const { title, info } = question;
  const [show, setShow] = useState(true);
  return <article class="question">
    <header>
      <h4>{title}</h4>
      <button onClick={() => setShow(!show)} class="btn">
        {show ? <AiOutlinePlus /> :
        <AiOutlineMinus />}
      </button>
    </header>
    {show || <p>{info}</p>}
  </article>;
};

export default Question;
