import React from "react";
import ReactDOM from "react-dom";
import "./content.css";
import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

class Main extends React.Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage('Hello Nhat');
  };
  render() {
    return (
      <div className={"my-extension"}>
        <Widget handleNewUserMessage={this.handleNewUserMessage} />
      </div>
    );
  }
}

const app = document.createElement("div");
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
