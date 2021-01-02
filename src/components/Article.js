import React, { Component } from "react";

class Article extends Component {
    state = {
        isOpen: false,
    };
    render() {
        const { article } = this.props;
        console.log("----", this.props);
        const body = this.state.isOpen && <section>{article.text}</section>;
        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick={handleClick}>close</button>
                {body}
                <h3>creation date: {new Date(article.date).toDateString()}</h3>
            </div>
        );
    }
}

function handleClick() {
    console.log("----", "clicked");
}
export default Article;
