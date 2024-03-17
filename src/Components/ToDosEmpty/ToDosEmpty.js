import React from "react";
import "./ToDosEmpty.css";
import { ReactComponent as EmptyImg } from '../../Img/empty.svg';

function ToDosEmpty() {
  return (
    <div className="Empty-container">
      <div className="Empty-border"></div>
      <EmptyImg className="Empty-image"/>
      <p>Write down some tasks or notes :)</p>
    </div>
  );
}

export { ToDosEmpty };
