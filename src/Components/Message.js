import "../Message.css";
function Message({ text }) {
  return (
    <div>
      <h2 className="text_el">
        <span className="message_div">
          Message:
          <br />
        </span>
        {text}
      </h2>
    </div>
  );
}

export default Message;
