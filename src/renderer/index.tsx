import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

// D&Dのデフォルトの挙動をキャンセル
document.ondragover = document.ondrop = (e) => {
    e.preventDefault()
}

ReactDOM.render(
    <App />,
    document.getElementById("content")
);
