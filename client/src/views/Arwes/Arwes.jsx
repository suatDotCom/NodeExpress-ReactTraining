import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ChartistGraph from "react-chartist";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import AccessTime from "@material-ui/icons/AccessTime";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import {
  Arwes,
  Header,
  Logo,
  Button,
  Row,
  Col,
  Heading,
  ThemeProvider,
  createTheme,
  SoundsProvider,
  createSounds,
  withSounds,
  Player,
  Project,
  Words,
  Frame,
  Loading,
  Footer,
  Image,
  Blockquote,
  Line
} from "arwes";

import arwesPattern from "../../assets/img/glow.png";
import arwesBg from "../../assets/img/background.jpg";
import imgLineGraph from "../../assets/img/Line_Graph.png";
import imgScanElements from "../../assets/img/Scan_Elements.png";

import circle1 from "../../assets/img/circle1.png";
import circle2 from "../../assets/img/circle2.png";
import circle3 from "../../assets/img/circle3.png";
import circle4 from "../../assets/img/circle4.png";

import HudMonitor from "../../components/HudMonitor/HudMonitor.jsx";

import SoundEffect from "../../components/SoundEffect/SoundEffect.js";

function TableList(props) {
  const { classes } = props;

  const styles = {};
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <SoundEffect name="typeSound" url="../../assets/sound/typing.mp3" />
        <ThemeProvider theme={createTheme()}>
          <Arwes
            animate
            background={arwesBg}
            pattern={arwesPattern}
            // style={{ left: "260px" }}
          >
            <Header animate style={{ height: 120 }}>
              <div>
                <Loading animate />
                <Loading animate small />
                <div style={{ position: "absolute", width: 800, top: 50 }}>
                  <Loading animate full />
                </div>
              </div>
            </Header>
            <Row>
              <Col
                m={6}
                l={6}
                s={12}
                style={{ marginTop: 30, textAlign: "center" }}
              >
                <div style={{ margin: "0 auto", padding: 20, maxWidth: 600 }}>
                  <Image animate resources={imgScanElements}>
                    <Line animate />
                    <Blockquote>
                      <Row>
                        <Col m={6}>VGG 16:</Col>
                        <Col m={6}> Lorem (80%)</Col>
                      </Row>
                      <Row>
                        <Col m={6} />
                        <Col m={6}> Lorem (70%)</Col>
                      </Row>
                      <Row>
                        <Col m={6} />
                        <Col m={6}> Lorem (95%)</Col>
                      </Row>
                    </Blockquote>

                    <Blockquote data-layer="success">
                      <Row>
                        <Col m={6}>ResNet:</Col>
                        <Col m={6}> Lorem (80%)</Col>
                      </Row>
                      <Row>
                        <Col m={6} />
                        <Col m={6}> Lorem (70%)</Col>
                      </Row>
                      <Row>
                        <Col m={6} />
                        <Col m={6}> Lorem (95%)</Col>
                      </Row>
                    </Blockquote>
                  </Image>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </Col>

              <Col
                m={6}
                l={6}
                s={12}
                style={{ marginTop: 30, textAlign: "center" }}
              >
                {/* <hr
                  style={{
                    border: "none",
                    borderLeft: " 1px solid hsla(200, 10%, 50%,100)",
                    height: "100vh",
                    width: "209px",
                    zIndex: 9999
                  }}
                /> */}

                <HudMonitor />

                {/* <Col l={3}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "20px",
                      width: "100%"
                    }}
                  >
                    <Frame
                      show={true}
                      animate={true}
                      level={3}
                      corners={4}
                      layer="primary"
                    >
                      <div style={{ padding: "70px 90px", fontSize: "32px" }}>
                        <img src={circle1} />
                      </div>
                    </Frame>
                  </div>
                </Col>

                <Col l={3}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "20px",
                      width: "100%"
                    }}
                  >
                    <Frame
                      show={true}
                      animate={true}
                      level={3}
                      corners={4}
                      layer="primary"
                    >
                      <div style={{ padding: "70px 90px", fontSize: "32px" }}>
                        <img src={circle2} />
                      </div>
                    </Frame>
                  </div>
                </Col>

                <Col l={3}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "20px",
                      width: "100%"
                    }}
                  >
                    <Frame
                      show={true}
                      animate={true}
                      level={3}
                      corners={4}
                      layer="primary"
                    >
                      <div style={{ padding: "70px 90px", fontSize: "32px" }}>
                        <img src={circle3} />
                      </div>
                    </Frame>
                  </div>
                </Col>

                <Col l={3}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "20px",
                      width: "100%"
                    }}
                  >
                    <Frame
                      show={true}
                      animate={true}
                      level={3}
                      corners={4}
                      layer="primary"
                    >
                      <div style={{ padding: "70px 90px", fontSize: "32px" }}>
                        <img src={circle4} />
                      </div>
                    </Frame>
                  </div>
                </Col> */}
              </Col>
            </Row>

            <div style={{ position: "relative", padding: 30 }}>
              <Project
                style={{ position: "relative" }}
                animate
                header="Futuristic Dashboard Design"
              >
                {anim => (
                  <p>
                    <Words animate show={anim.entered}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis laboris nisi ut
                      aliquip ex. Duis aute irure. Consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud.
                    </Words>
                  </p>
                )}
              </Project>
            </div>

            <Row>
              <Col md={3}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "20px"
                  }}
                >
                  {/* <Image animate resources={imgLineGraph} style={{width:"100%"}} /> */}
                  <img src={imgLineGraph} style={{ width: "100%" }} />
                </div>
              </Col>
              <Col md={3}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "80px"
                  }}
                >
                  <img src={imgScanElements} style={{ width: "100%" }} />
                </div>
              </Col>
            </Row>

            <div style={{ position: "relative", padding: 30 }}>
              <Project
                style={{ position: "relative" }}
                animate
                header="Futuristic Dashboard Design"
              >
                {anim => (
                  <p>
                    <Words animate show={anim.entered}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis laboris nisi ut
                      aliquip ex. Duis aute irure. Consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud.
                    </Words>
                  </p>
                )}
              </Project>
            </div>
          </Arwes>
        </ThemeProvider>
      </GridItem>
    </GridContainer>
  );
}

export default TableList;
