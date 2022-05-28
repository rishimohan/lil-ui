import React from "react";
import styled from "styled-components";
import { CloseIcon, BackdropDiv } from "./styles/common";

const Pane = ({
  show,
  title,
  titleComponent,
  backdropComponent,
  paneWidth,
  hideBackdrop,
  position,
  onClose,
  children,
}) => {
  const RenderChildren = () => {
    if (children) {
      const ChildrenDiv = styled.div`
        color: #666;
        overflow: auto;
        height: calc(100vh - 39px);
        padding: 8px 14px 16px 14px;
      `;

      return <ChildrenDiv>{children}</ChildrenDiv>;
    }

    const ChildrenEmptyDiv = styled.div`
      color: #666;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.4;
      height: 100%;
    `;

    return <ChildrenEmptyDiv>...</ChildrenEmptyDiv>;
  };

  const RenderTitle = () => {
    if (titleComponent) {
      return titleComponent;
    }

    const TitleWrapper = styled.div`
      padding: 10px 16px;
      border-bottom: 1px solid #ededed;
      display: flex;
      align-items: center;
      justify-content: between;
    `;

    if (title) {
      return (
        <TitleWrapper>
          <div>{title}</div>
          <CloseIcon onClick={onClose}>×</CloseIcon>
        </TitleWrapper>
      );
    }

    return "";
  };

  const RenderBackdrop = () => {
    if (backdropComponent) {
      return <div onClick={onClose}>{backdropComponent}</div>;
    }

    return (
      <BackdropDiv
        style={{ opacity: hideBackdrop ? 0 : 1 }}
        onClick={onClose}
      />
    );
  };

  if (show) {
    const PaneWrapper = styled.div`
      position: fixed;
      inset: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: start;
      justify-content: ${() => (position === "left" ? "start" : "end")};
    `;

    const PaneDialog = styled.div`
      color: #666;
      border-left: 1px solid #ededed;
      width: ${() => paneWidth || "500px"};
      height: 100vh;
      position: relative;
      z-index: 10;
      background: #fff;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      overflow: hidden;
    `;

    return (
      <PaneWrapper>
        <RenderBackdrop />
        <PaneDialog>
          <RenderTitle />
          <RenderChildren />
        </PaneDialog>
      </PaneWrapper>
    );
  }

  return "";
};

export default Pane;
