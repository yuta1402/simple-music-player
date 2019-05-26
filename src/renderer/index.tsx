import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div>Hello world!</div>
        );
    }
}

// D&Dのデフォルトの挙動をキャンセル
document.ondragover = document.ondrop = (e) => {
    e.preventDefault()
}

ReactDOM.render(
    <App />,
    document.getElementById("content")
);
