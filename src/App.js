import {useState} from "react";
import {Pane, Modal, Button} from './lib';

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "0.8rem",
            fontWeight: "500",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#42b992",
              color: "#d1f9f2",
              padding: "2px 8px",
              borderRadius: "40px",
              margin: "0 6px",
            }}
          >
            Currently in Alpha
          </div>
          <a
            style={{
              textDecoration: "none",
              color: "#fff",
              background: "#1da1f2",
              padding: "2px 8px",
              borderRadius: "40px",
              margin: "0 6px",
            }}
            href="https://twitter.com/thelifeofrishi"
          >
            @thelifeofrishi
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          border: "1px solid #ededed",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            borderBottom: "1px solid #ededed",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              textAlign: "center",
              marginBottom: "20px",
              display: "flex",
              flex: "none",
            }}
          >
            <h2>Modal</h2>
            <Button onClick={() => setShowModal(true)}>Show Modal</Button>
          </div>
          <div
            style={{
              width: "100%",
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Default value</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>show</code>
                  </td>
                  <td>
                    <code>false</code>
                  </td>
                  <td>
                    <div>
                      <p>
                        <code>true</code> to show the modal
                      </p>
                      <p>
                        <code>false</code> to hide the modal
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>children</code>
                  </td>
                  <td></td>
                  <td>
                    <div>Modal content can be passed as children</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>titleComponent</code>
                  </td>
                  <td></td>
                  <td>
                    <div>Custom component for modal heading</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>backdropComponent</code>
                  </td>
                  <td></td>
                  <td>
                    <div>Custom component for modal backdrop</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>title</code>
                  </td>
                  <td></td>
                  <td>
                    <div>Modal title</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>onClose</code>
                  </td>
                  <td></td>
                  <td>
                    <div>Function to run when modal closes</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          atque dolorem facilis pariatur sapiente impedit consequatur velit
          animi error aliquam non ipsa, inventore sint cupiditate quod ratione
          sunt autem? Amet?
        </Modal>
        <hr />
        <h2>Pane</h2>
        <Button onClick={() => setShowPane(true)}>Show Pane</Button>
        <Pane
          show={showPane}
          onClose={() => setShowPane(false)}
          title="Pane Title"
        ></Pane>
        <hr />
        <h2>Button</h2>
        <Button>Signup</Button>
      </div>
    </div>
  );
}

export default App;
