

import  { useState, ChangeEvent, FormEvent } from "react";

type InputProps = {
  onSendMessage: (message: string) => void;
  text:string,
};

const Input = ({ onSendMessage }:InputProps) => {

  const [text, setText] = useState<InputProps[]>([]);

  const onChange = (e: ChangeEvent) => {
    setText(e.target.value);
    
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setText("");
      onSendMessage(text);
    }
  };

  return (
    <div className="Input">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Upiši poruku i stisni ENTER"
          autoFocus
        />
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
};

export default Input;





