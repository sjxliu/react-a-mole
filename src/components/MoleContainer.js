import React, { useState } from "react";
import Mole from "../images/mole.png";

function MoleContainer(props) {
  let [moleDude, setMoleDude] = useState(false);

  const clickHandler = (e) => {
    props.setScore(props.score + 1);
    setMoleDude(false);
  };

  let showMole = moleDude ? 
    <Mole
      clickHandler={clickHandler}
      setScore={props.setScore}
      toggle={setMoleDude}
    />
   : 
    <EmptySlot toggle={setTheMole} />
  

  return <div>{showMole}</div>;
}

export default MoleContainer;
