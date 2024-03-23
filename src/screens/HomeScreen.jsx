import { useEffect, useState } from "react";
import "../App.css";
import Card from "../components/Card";
import FirstButton from "../components/FirstButton";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

const emojis = ["🎉", "🦙", "🎈", "💛", "🎁"];

const HomeScreen = () => {
  const [loading, setLoadingBtn] = useState(true);
  const [lastBtn, setLastBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingBtn(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading && (
        <div class="ring">
          <p style={{ marginTop: "50px" }}>Cargandooooo...</p>
          <span></span>
        </div>
      )}
      {!loading && (
        <>
          <div class="parent" className="parent">
            {!lastBtn && <FirstButton setLastBtn={setLastBtn} />}
            {lastBtn && <Card />}
          </div>
          {[...Array(20).keys()].map((e) => (
            <div className="snowflake" key={e}>
              {emojis[Math.floor(Math.random() * emojis.length)]}
            </div>
          ))}
          <div className="llama"></div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
