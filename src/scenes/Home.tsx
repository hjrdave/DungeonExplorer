import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import PlaceHolderIMG from "../assets/placeholder_img.jpeg";
import { ReactTerminal } from "react-terminal";
import { commands } from "../commands";

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col className={"p-3 d-flex justify-content-center"}>
            <h1>
              <code style={{ color: "green" }}>Dungeon Explorer</code>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Body>
                <Image src={PlaceHolderIMG} fluid />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={"h-100"}>
              <Card.Body>
                <h3>Commands</h3>
                <ul>
                  <li>
                    Look at inventory: <code>inventory</code>
                  </li>
                  <li>
                    Hit something: <code>hit</code>
                  </li>
                  <li>
                    Look somewhere: <code>look</code>
                  </li>
                  <li>
                    Take something: <code>take</code>
                  </li>
                  <li>
                    Enter into something: <code>enter</code>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ height: "300px", overflow: "auto" }}>
              <Card.Body>
                <ReactTerminal
                  showControlBar={false}
                  theme={"matrix"}
                  commands={commands}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
