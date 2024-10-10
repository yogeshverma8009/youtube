import React from "react";

const ChatMessage = ({name , message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-6 rounded-full"
        alt="user"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
