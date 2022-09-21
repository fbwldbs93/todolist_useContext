function Form({ onSubmit, input, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={input} onChange={onChange} />
      <button className="todolist-button">입력</button>
    </form>
  );
}

export default Form;
