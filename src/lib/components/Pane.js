import React from "react";

const Pane = ({ show, title, position, onClose, children }) => {
  const RenderChildren = () => {
    if (children) {
      return (
        <div
          style={{
            color: "#666",
            overflow: "auto",
            height: "calc(100vh - 39px)",
          }}
        >
          <div style={{ padding: "8px 14px 16px 14px" }}>{children}</div>
        </div>
      );
    }

    return (
      <div
        style={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: "0.4",
          height: "100%"
        }}
      >
        ...
      </div>
    );
  };

  const RenderTitle = () => {
    if (title) {
      return <div>{title}</div>;
    }

    return "";
  };

  const RenderBackdrop = () => {
    return (
      <div
        style={{
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
        }}
        onClick={onClose}
      />
    );
  };

  return show ? (
    <div
      style={{
        position: "fixed",
        inset: "0",
        zIndex: "10",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: position === "left" ? "start" : "end",
      }}
    >
      <RenderBackdrop />
      <div
        style={{
          color: "#666",
          border: "1px solid #ededed",
          maxWidth: "500px",
          width: "100%",
          height: "100vh",
          position: "relative",
          zIndex: "10",
          backgroundColor: "#fff",
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.02)",
          overflow: "hidden",
          
        }}
      >
        <div
          style={{
            padding: "10px 14px",
            borderBottom: "1px solid #ededed",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <RenderTitle />
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
        <RenderChildren />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Pane;
