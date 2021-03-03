import React, { useState } from 'react';
import PropTypes from 'prop-types';

var AddQuestion = ({ handleAddQuestionModal }) => {
  const [ question, setQuestion ] = useState('');
  const [ nickname, setNickname ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleChange = e => {
    let value = e.target.value
    if (e.target.name === 'question') setQuestion(value);
    if (e.target.name === 'nickname') setNickname(value);
    if (e.target.name === 'email') setEmail(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuestion('');
    setNickname('');
    setEmail('');
  }

  return (
    <React.Fragment>
      <div className="modal-focus" onClick={handleAddQuestionModal}></div>
      <div className="add-question-modal">
        <h1>Your Question</h1>
        <form>
          <textarea
            name="question"
            value={question}
            onChange={e => handleChange(e)}></textarea>
          <label>
            What is your nickname?
            <input
              type="text"
              name="nickname"
              placeholder="Example: jackson11!"
              value={nickname}
              onChange={e => handleChange(e)}></input>
            For privacy reasons, do not use your full name or email address
          </label>
          <label>
            Your email
            <input
              type="text"
              name="email"
              placeholder="Why did you like the product or not?"
              value={email}
              onChange={e => handleChange(e)}></input>
            For authentication reasons, you will not be emailed
          </label>
          <input
            type="submit"
            value="Submit"
            onClick={e => handleSubmit(e)}></input>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddQuestion;

AddQuestion.propTypes = {
  handleAddQuestionModal: PropTypes.func
}