import React from "react";
import Mole from "../images/mole.png";

function Mole(props) {
  useEffect(() => {
    // Feel free to adjust this number as you see fit.
    // It is your game to tune!
    let randomsSecs = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.setShowMole(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "30vw" }} src={Mole} onClick={props.clickHandler} />
    </div>
  );
}

export default Mole;
