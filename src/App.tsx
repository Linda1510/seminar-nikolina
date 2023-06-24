

import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Messages from "./message/messages";
import Input from "./components/input";

type Member = {
  id?: string;
  username: string;
  color: string;
};

type Message = {
  text: string;
  member: Member;
};

const App = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "This is a test message!",
      member: {
        color: "blue",
        username: "bluemoon",
      },
    },
  ]);

  const [member, setMember] = useState<Member>({
    username: randomName(),
    color: randomColor(),
  });

  useEffect(() => {
    const drone = new window.Scaledrone("CQmg6PZYeclv4kdT", {
      data: member,
    });

    drone.on("open", (error?: string) => {
      if (error) {
        return console.error(error);
      }
      const updatedMember = { ...member, id: drone.clientId };
      setMember(updatedMember);
    });

    return () => {
      drone.close();
    };
  }, [member]);

  function randomName(): string {
  return randomName();
  }

  function randomColor(): string {
    return randomColor();
  }

  const onSendMessage = (message: string) => {
    const updatedMessages = [...messages];
    updatedMessages.push({
      text: message,
      member: member,
    });
    setMessages(updatedMessages);
  };

  return (
    <div className="app">
      <Header />
      <div className="App">
        <Messages messages={messages} currentMember={member} />
        <Input onSendMessage={onSendMessage} text={""} />
      </div>
    </div>
  );
};

export default App;
