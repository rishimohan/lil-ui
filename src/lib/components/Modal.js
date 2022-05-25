import React from "react";

const Modal = ({ modalWidth, titleComponent, backdropComponent, show, title, onClose, children }) => {
  const RenderChildren = () => {
    if(children) {
      return (
        <div
          style={{
            color: "#666",
            padding: "10px 16px",
          }}
        >
          {children}
        </div>
      );
    }

    return (
      <div style={{ padding: "5px 8px`", minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center", opacity: "0.2"}}>
        ...
      </div>
    )
  }

  const RenderTitle = () => {
    if(titleComponent) {
      return titleComponent;
    }

    if (title) {
      return (
        <div
          style={{
            padding: "10px 16px",
            borderBottom: "1px solid #ededed",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <di>{title}</di>
          <div
            style={{
              color: "#555",
              cursor: "pointer",
              opacity: "0.4",
            }}
            onClick={onClose}
          >
            ×
          </div>
        </div>
      );
    }

    return (
      ""
    );
  }

  const RenderBackdrop = () => {
    if(backdropComponent) {
      return <div onClick={onClose}>{backdropComponent}</div>;
    }

    return (
      <div
        style={{
          background: "rgba(255, 255, 255, 0.3)",
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
        }}
        onClick={onClose}
      />
    );
  }

  return show ? (
    <div
      style={{
        position: "fixed",
        inset: "0",
        zIndex: "10",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RenderBackdrop />
      <div
        style={{
          color: "#666",
          border: "1px solid #ededed",
          width: modalWidth || "500px",
          borderRadius: "12px",
          position: "relative",
          zIndex: "10",
          backgroundColor: "#fff",
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.02)",
          overflow: "hidden",
        }}
      >
        <RenderTitle />
        <RenderChildren />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
