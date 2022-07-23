import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import React from "react";
import "./Chat.css";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import MicIcon from "@mui/icons-material/Mic";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message chat__reciever">
          <span className="chat__name">John Doe</span>
          this is a message.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">John Doe</span>
          this is a message.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">John Doe</span>
          this is a message.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">John Doe</span>
          this is a message.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">John Doe</span>
          this is a message.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">John Doe</span>
          this is a message.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">John Doe</span>
          this is a message.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">John Doe</span>
          this is a message.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">John Doe</span>
          this is a message.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <EmojiEmotionsOutlinedIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
