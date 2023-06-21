

import  { useState, useEffect } from "react";
import Header from "./components/header";
import Input from "./components/input";
import Messages from "./message/messages";
import "./styles/styles.scss";

const App = () => {
  const [messages, setMessages] = useState([
    {
      text: "This is a test message!",
      member: {
        color: "blue",
        username: "bluemoon",
      },
    },
  ]);

  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });

  useEffect(() => {
    const drone = new window.Scaledrone("CQmg6PZYeclv4kdT", {
      data: member,
    });

    drone.on("open", (error:string) => {
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

  function randomName() {
    const adjectives = [
      "autumn",
      "hidden",
      "bitter",
      "misty",
      "silent",
      "empty",
      "dry",
      "dark",
      "summer",
      "icy",
      "delicate",
      "quiet",
      "white",
      "cool",
      "spring",
      "winter",
      "patient",
      "twilight",
      "dawn",
      "crimson",
      "wispy",
      "weathered",
      "blue",
      "billowing",
      "broken",
      "cold",
      "damp",
      "falling",
      "frosty",
      "green",
      "long",
      "late",
      "lingering",
      "bold",
      "little",
      "morning",
      "muddy",
      "old",
      "red",
      "rough",
      "still",
      "small",
      "sparkling",
      "throbbing",
      "shy",
      "wandering",
      "withered",
      "wild",
      "black",
      "young",
      "holy",
      "solitary",
      "fragrant",
      "aged",
      "snowy",
      "proud",
      "floral",
      "restless",
      "divine",
      "polished",
      "ancient",
      "purple",
      "lively",
      "nameless",
    ];
    const nouns = [
      "waterfall",
      "river",
      "breeze",
      "moon",
      "rain",
      "wind",
      "sea",
      "morning",
      "snow",
      "lake",
      "sunset",
      "pine",
      "shadow",
      "leaf",
      "dawn",
      "glitter",
      "forest",
      "hill",
      "cloud",
      "meadow",
      "sun",
      "glade",
      "bird",
      "brook",
      "butterfly",
      "bush",
      "dew",
      "dust",
      "field",
      "fire",
      "flower",
      "firefly",
      "feather",
      "grass",
      "haze",
      "mountain",
      "night",
      "pond",
      "darkness",
      "snowflake",
      "silence",
      "sound",
      "sky",
      "shape",
      "surf",
      "thunder",
      "violet",
      "water",
      "wildflower",
      "wave",
      "water",
      "resonance",
      "sun",
      "wood",
      "dream",
      "cherry",
      "tree",
      "fog",
      "frost",
      "voice",
      "paper",
      "frog",
      "smoke",
      "star",
    ];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }

  function randomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  }

  const onSendMessage = (message:string) => {
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
        <Input onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default App;
