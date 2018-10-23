import React, { Component } from "react";

import { Row, Col, Blockquote } from "arwes";

export class CustomBlockquote extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default CustomBlockquote;
