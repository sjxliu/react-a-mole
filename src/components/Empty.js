import React, { useEffect } from "react";
import Molehill from "../images/Molehill";

const EmptySlot = (props) => {
  useEffect(() => {
    let randomsSecs = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randomsSecs);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img src={Molehill} />
    </div>
  );
};

export default EmptySlot;
