import React from "react";
import "../App.css";

export default function Card() {
  return (
    <div className="co">
      <div className="im">
        <div className="image"></div>
        <div className="content">
          <p>
            ✨ Feliz cumple Wendy 🎉🎉, que Dios te bendiga hoy y siempre, sos
            una persona maravillosa:){" "}
          </p>
          {/* <div className="heart"></div> */}
          <div className="smile"></div>
          <div className="eyes2"></div>
        </div>
      </div>
      <div className="word">
        <h3 style={{marginBottom: "20px", margin: 0}}>
          {" "}
          Disfruta tu dia, que se cumplan tus deseos y logres todos tus objetivos, espero que te guste la tarjeta:) aqui te dejo la llama, te quiero 🤍{" "}
        </h3>
        {/* <div className="image2"></div> */}
        <div className="alpaca">
          <div className="head">
            <div className="ears-container">
              <div className="ear ear-left"></div>
              <div className="ear ear-right"></div>
            </div>
            <div className="eyes-container">
              <div className="eyes"></div>
            </div>
            <div className="nose-container">
              <div className="nose"></div>
            </div>
          </div>
          <div className="body">
            <div className="neck"></div>
            <div className="chest">
              <div className="saddlebags"></div>
            </div>
            <div className="tail"></div>
          </div>
          <div className="legs-container">
            <div className="legs"></div>
            <div className="bottom-legs"></div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
}
