import React from "react";

const Button = ({ className, onClick, style, children }) => {
  return (
    <button
      onClick={onClick}
      className={className ? className : "lil-button"}
      style={style ? style : null}
    >
      {children}
    </button>
  );
};

export default Button;
