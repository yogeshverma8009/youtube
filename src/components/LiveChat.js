import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),

          message: makeRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            //Disclamer: Don't use indexes as keys beacuse in liv data alrady given as ID
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form className="w-full p-1 ml-2 border border-black rounded-lg my-1" 
      onSubmit={(e) =>{
        e.preventDefault();
        dispatch(
          addMessage({
            name: "Yogesh",
            message:liveMessage,
          })
        );
        setLiveMessage("");
      }}>
        <div className="flex items-center">
          <input
            className=" ml-2 w-[250px] p-[5px] border border-gray-300 rounded-lg"
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className=" ml-2 bg-slate-300 hover:bg-slate-400 text-black rounded-lg px-5 py-2 transition-colors">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default LiveChat;
