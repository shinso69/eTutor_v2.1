import React from "react";

function SliderSection(props) {
  return <div className={props.present}>{props.children}</div>;
}

export default SliderSection;
