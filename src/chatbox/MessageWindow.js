import React from "react";
import DeafultImage from "./DefaultImage";

export const EditIcon = () => {
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
      className="feather feather-edit"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L11 16.5 7 17.5l1-4.5 9.5-9.5z"></path>
    </svg>
  );
};

export const CopyIcon = () => {
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
      className="feather feather-copy"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
};
function MessageWindow(props) {
  return (
    <div className="chatWindow">
      {props.messageArray.length == 0 && (
        <div className="defaultview">
          <DeafultImage image="default1" overlayText="Personalise and recommend products based on seasonal offerings"></DeafultImage>
          <DeafultImage image="default2" overlayText="Recommend frequently bought products when user lands on any product page"></DeafultImage>
        </div>
      )}
      {props.messageArray.length > 0 &&
        props.messageArray.map((item, index) => {
          return (
            <div className="messageWrapper" key={index}>
              <div className="messages">{item}</div>
              <EditIcon></EditIcon>
              <CopyIcon></CopyIcon>
            </div>
          );
        })}
    </div>
  );
}

export default MessageWindow;
