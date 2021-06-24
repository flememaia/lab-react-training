import React from "react";

class LikeButton extends React.Component {

    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

    render (){

        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleIncrement}>
                    <span style={{ fontSize: "2rem", fontStyle: "bold" }}>
                        {this.state.count}Likes
                    </span>
                </button>
            </div>
        )
    }
}

export default LikeButton;