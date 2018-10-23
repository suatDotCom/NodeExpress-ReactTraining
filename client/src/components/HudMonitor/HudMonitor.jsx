import React, { Component } from "react";

import "../../assets/css/hud-monitor.css";

export class HudMonitor extends Component {
  render() {
    return (
      <div className="control-panel">
        <div className="control-panel-monitor">
          <div className="control-panel-inner-panel">
            <p>phaser ammunition: 100%</p>
            <p>hull integrity: 97%</p>
            <p>nearest waymark star: BoRG-58</p>
            <p>distance to destination: 18mLy</p>
          </div>
        </div>
        <div className="control-panel-controls">
          <div className="control-panel-inner-panel" />
        </div>
      </div>
    );
  }
}

export default HudMonitor;
