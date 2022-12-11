import React from "react";
import {TitleWidget} from "../../widgets/title/title-widget"

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "WELCOME TO DIBBA",
    };
  }

  render() {
    return (
      <div>
        <TitleWidget title={this.state.title}/>
      </div>
    )
  }
}
