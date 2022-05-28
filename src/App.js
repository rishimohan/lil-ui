import { useState } from "react";
import { Pane, Modal, Button } from "./lib";
import styled from "styled-components";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showPane, setShowPane] = useState(false);

  const BaseDiv = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    max-width: 800px;
    margin: 20px auto;
    border-radius: 12px;
  `;

  const Header = styled.header`
    text-align: center;
    margin-bottom: 1.5rem;
  `;

  const H1 = styled.h1`
    font-weight: 900;
    font-size: 3.2rem;
    line-height: 1;
    margin-bottom: 0;
  `;

  const Tagline = styled.p`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1;
  `;

  const BadgesWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 500;
    justify-content: center;
  `;

  const Badge = styled.div`
    background: #42b992;
    color: #d1f9f2;
    padding: 2px 8px;
    border-radius: 40px;
    margin: 0 6px;
    text-decoration: none;
  `;

  const PreviewBlock = styled.section`
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #ededed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.03);
  `;

  const RenderHeader = () => (
    <Header>
      <H1>lil ui</H1>
      <Tagline>A very basic set of useful React components</Tagline>
      <BadgesWrapper>
        <Badge
          style={{
            background: "#42b992",
            color: "#d1f9f2",
          }}
        >
          Currently in Alpha
        </Badge>
        <Badge
          as="a"
          target="_blank"
          style={{
            color: "#fff",
            background: "#1da1f2",
          }}
          href="https://twitter.com/thelifeofrishi"
        >
          @thelifeofrishi
        </Badge>
      </BadgesWrapper>
    </Header>
  );

  return (
    <BaseDiv>
      <RenderHeader />
      <PreviewBlock>
        <h2 style={{ marginTop: 0 }}>Modal</h2>
        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
        <Modal
          // backdropComponent={
          //   <div
          //     style={{
          //       position: "absolute",
          //       inset: "0",
          //       width: "100%",
          //       height: "100%",
          //       backgroundColor: "#111",
          //     }}
          //   />
          // }
          // titleComponent={<div>Title</div>}
          modalWidth="500px"
          show={showModal}
          onClose={() => setShowModal(false)}
          title="Modal Title"
          hideBackdrop={true}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          atque dolorem facilis pariatur sapiente impedit consequatur velit
          animi error aliquam non ipsa, inventore sint cupiditate quod ratione
          sunt autem? Amet?
        </Modal>
      </PreviewBlock>
      <PreviewBlock>
        <h2 style={{ marginTop: 0 }}>Pane</h2>
        <Button onClick={() => setShowPane(true)}>Show Pane</Button>
        <Pane
          show={showPane}
          onClose={() => setShowPane(false)}
          title="Pane Title"
          hideBackdrop={true}
        ></Pane>
      </PreviewBlock>
      <PreviewBlock>
        <h2 style={{ marginTop: 0 }}>Button</h2>
        <Button>Signup</Button>
      </PreviewBlock>
    </BaseDiv>
  );
}

export default App;
