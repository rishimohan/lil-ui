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
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Henlo World!"
      >
        {/* <div>There goes content</div> */}
      </Modal>
      <button onClick={() => setShowPane(true)}>Show Pane</button>
      <Pane
        show={showPane}
        onClose={() => setShowPane(false)}
        title="Henlo World!"
      >
        {/* <div>There goes content</div> */}
      </Pane>
    </div>
  );
}

export default App;
