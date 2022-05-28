import React from "react";
import styled from "styled-components";
import { CloseIcon, BackdropDiv } from "./styles/common";

const Modal = ({
  modalWidth,
  titleComponent,
  hideBackdrop,
  backdropComponent,
  show,
  title,
  onClose,
  children,
}) => {
  const RenderChildren = () => {
    const ChildrenDiv = styled.div`
      color: #666;
      padding: 12px 16px;
    `;

    if (children) {
      return <ChildrenDiv>{children}</ChildrenDiv>;
    }

    const ChildrenEmptyDiv = styled.div`
      padding: 10px 16px;
      min-height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.2;
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
        onClick={onClose}
        style={{ opacity: hideBackdrop ? 0 : 1 }}
      />
    );
  };

  if (show) {
    const ModalWrapper = styled.div`
      position: fixed;
      inset: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const ModalDialog = styled.div`
      color: #666;
      border: 1px solid #ededed;
      width: ${() => modalWidth || "500px"};
      border-radius: 12px;
      position: relative;
      z-index: 10;
      background: #fff;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      overflow: hidden;
    `;

    return (
      <ModalWrapper>
        <RenderBackdrop />
        <ModalDialog>
          <RenderTitle />
          <RenderChildren />
        </ModalDialog>
      </ModalWrapper>
    );
  }

  return "";
};

export default Modal;
