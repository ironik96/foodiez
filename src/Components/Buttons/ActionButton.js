const ActionButton = ({ text, onClick }) => {
  return (
    <button className="btn action-btn" onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};

export default ActionButton;
