import {useState} from "react";
import Pane from './lib/components/Pane';
import Modal from './lib/components/Modal';
import './app.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showPane, setShowPane] = useState(false);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        borderRadius: "12px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <h1
          style={{
            fontWeight: "900",
            fontSize: "3.2rem",
            lineHeight: "1",
            marginBottom: "0",
          }}
        >
          lil ui
        </h1>
        <h2 style={{ fontWeight: "500", fontSize: "1rem", lineHeight: "1" }}>
          A very basic set of useful React components
        </h2>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h2>Modal</h2>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
        <Modal
          // backdropComponent={
          //   <div
          //     style={{
          //       position: "absolute",
          //       inset: "0",
          //       width: "100%",
          //       height: "100%",
          //       backgroundColor: "#111"
          //     }}
          //   />
          // }
          // titleComponent={<div>Title</div>}
          show={showModal}
          onClose={() => setShowModal(false)}
          title="Modal Title"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus atque dolorem facilis pariatur sapiente impedit consequatur velit animi error aliquam non ipsa, inventore sint cupiditate quod ratione sunt autem? Amet?
        </Modal>
        <hr />
        <h2>Pane</h2>
        <button onClick={() => setShowPane(true)}>Show Pane</button>
        <Pane
          show={showPane}
          onClose={() => setShowPane(false)}
          title="Pane Title"
        ></Pane>
      </div>
    </div>
  );
}

export default App;
