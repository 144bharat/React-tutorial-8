import React, { useState } from "react";

export default function TextForm(props) {
  const my = {
    paddingBottom: "20%"
  };
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log(text);
    setText(text.toUpperCase());
  };
  function handleLoClick() {
    setText(text.toLowerCase());
  }

  function handleClear() {
    setText("");
  }
  function handleOnUpchange(event) {
    console.log("Up changed");
    setText(event.target.value);
  }
  return (
    <div className={`container bg-${props.mode}`} style={my}>
      <div className="form-group">
        <label
          htmlFor="mybox"
          className={`text-${
            props.mode === "dark" ? "white" : "success"
          } fw-bold my-3`}
        >
          {props.boxtitle}
        </label>
        <textarea
          className={`text-${props.mode === "dark" ? "light" : "dark"} bg-${
            props.mode
          } form-control`}
          id="mybox"
          rows="8"
          placeholder="write text here"
          value={text}
          onChange={handleOnUpchange}
        ></textarea>

        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>

        <button className="btn btn-danger" onClick={handleClear}>
          Clear Text
        </button>
      </div>

      <div
        className={`text-${props.mode === "dark" ? "light" : "dark"} fw-bold}`}
      >
        Number of character
        <span
          className={`text-${
            props.mode === "dark" ? "light" : "dark"
          } fw-bold}`}
        >
          {text.length}
        </span>
      </div>
      <div
        className={`text-${props.mode === "dark" ? "light" : "dark"} fw-bold}`}
      >
        Number of words
        <span
          className={`text-${
            props.mode === "dark" ? "light" : "dark"
          } fw-bold}`}
        >
          {text === "" ? (text.length = 0) : text.trim().split(" ").length}
        </span>
      </div>

      <button
        className="btn btn-warning text-white fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#preview"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Preview >
      </button>

      <div className="collapse" id="preview">
        <div
          className={`card card-body text-${
            props.mode === "dark" ? "white" : "dark"
          } bg-${props.mode}`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
