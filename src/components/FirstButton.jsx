import React, { useState } from "react";

export default function FirstButton({ setLastBtn }) {
  const [firstBtn, setFirstBtn] = useState(true);
  const [secondBtn, setSecondBtn] = useState(false);

  return (
    <div className="wrap">
      <h2 className="titleBtn">{"Feliz Cumple Wendy :)"}</h2>
      {firstBtn && (
        <button
          className="button"
          onClick={() => {
            setFirstBtn(false);
            setSecondBtn(true);
          }}
        >
          {"Apretá aqui"}
        </button>
      )}
      {secondBtn && (
        <button
          className="button button2"
          onClick={() => {
            setSecondBtn(false);
            setLastBtn(true);
          }}
        >
          {"Ahora aqui jaja"}
        </button>
      )}
    </div>
  );
}
