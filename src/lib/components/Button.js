import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: inherit, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 7px 14px;
  border-radius: 8px;
  background: #fff;
  color: #777;
  border: 1px solid #d4d4d4;
  font-size: 0.9rem;
  box-shadow: 0 1px 3px rgba(17, 17, 17, 0.05);
  cursor: default;

  &:hover {
    border-color: #b5b5b5;
  }

  &:focus,
  &:active {
    transition: transform 0.1s ease-in-out;
    transform: scale(0.97);
  }
`;

const Button = ({ className, onClick, style, children }) => {

  return (
    <StyledButton
      onClick={onClick}
      className={className ? className : "lil-button"}
      style={style ? style : null}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
