import React from "react";
import DeafultImage from "./DefaultImage";
import { IconButton, Tooltip} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PublishIcon from '@mui/icons-material/Publish';
import EditIcon from '@mui/icons-material/Edit';


const EditIconWithToolTip = () => (<Tooltip title="Edit">
  <IconButton>
    <EditIcon />
  </IconButton>
</Tooltip>);

const CopyIcon = () => (<Tooltip title="Copy">
  <IconButton>
    <ContentCopyIcon />
  </IconButton>
</Tooltip>);

const PublishIconWithToolTip = () => (<Tooltip title="Publish">
  <IconButton>
    <PublishIcon />
  </IconButton>
</Tooltip>);

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
              <EditIconWithToolTip />
              <CopyIcon />
              <PublishIconWithToolTip />
            </div>
          );
        })}
    </div>
  );
}

export default MessageWindow;