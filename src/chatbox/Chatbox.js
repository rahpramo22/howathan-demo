import React, {useState} from "react";
import MessageWindow from "./MessageWindow";

export const SendTextFieldWithCustomSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-send"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
};

function Chatbox(props) {
  const [msgArray, setMsgArray] = useState([]);
  const [msg, setMsg] = useState("");

  const pushMsg = () => {
    const previousMsgs = [...msgArray];
    previousMsgs.push(msg);
    props.fetchApiWithPrompt(msg);
    setMsg("");
    setMsgArray(previousMsgs);
  };

  return (
    <div className="chatbox">
      <MessageWindow messageArray={msgArray}></MessageWindow>
      <div className="inputWrapper">
        <input
          type="text"
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          className="inputField"
          placeholder="Ask me to personalise..."
        />
        <button className="sendButton" onClick={pushMsg}>
          <SendTextFieldWithCustomSVG></SendTextFieldWithCustomSVG>
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
