import styled from "styled-components"

// Close icon

export const CloseIcon = styled.div`
  color: #d4d4d4;
  cursor: default;
  margin-left: auto;
  font-size: 1.2rem;

  &:hover {
    color: #999;
  }
`;

// Pane and modal backdrop

export const BackdropDiv = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;