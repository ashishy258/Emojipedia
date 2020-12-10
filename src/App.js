import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "🍉": "Watermelon",
  "🍊": "Orange",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "pineapple",
  "🥭": "Mango",
  "🍎": "Apple",
  "🍓": "Strawberry",
  "🍈": "Guava"
};

var emojiList = Object.keys(emojiDict);

// var emojiList = ["🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍓", "🍈"];
export default function App() {
  const [inputValue, setInpiutValue] = useState("");
  function onChangeHandler(event) {
    var a = event.target.value;
    var meaning = emojiDict[a];
    setInpiutValue(meaning);
  }
  function handleClick(event) {
    var a = event.target.innerText;
    var meaning = emojiDict[a];
    setInpiutValue(meaning);
  }
  return (
    <div className="App">
      <h1>Emojipedia</h1>
      <input onChange={onChangeHandler}></input>
      <h3>-- {inputValue} --</h3>
      <h4>Click the emoji to know their meaning</h4>
      {emojiList.map((item) => {
        return (
          <span onClick={handleClick} key={item}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
