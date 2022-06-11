import React, { Component } from 'react';

class LifeCycle extends Component {

    constructor(){
        super();

        this.state = {
            showChild: true,
            text: ''
        }
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            showChild: !prevState.showChild
        }))
    }

    handleUpdate = () => {
        this.setState((prevState) => ({
            text: prevState.text + 'Bankai, '
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggle}> toggle</button>
                <button onClick={this.handleUpdate}> update text </button>
                { this.state.showChild && <h1> Bankai </h1>}
                <p> {this.state.text}</p>
            </div>
        );
    }
}

export default LifeCycle;