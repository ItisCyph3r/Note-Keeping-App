import React, { Component } from 'react'

export default class ClassCounter extends Component {

    constructor(){
        super();

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState((prevState, prevProps) => ({
            count: this.state.count + 1
        }),
        () => {
            console.log(this.state.count)
            
        }
        )
    }

    decrement = () => {
        this.setState((prevState, prevProps) => ({
            count: this.state.count - 1
        }),
        () => {
            console.log(this.state)
            
        }
        )
    }

    render() {
        return (
        <>
            <h1> {this.state.count} </h1>
            <button onClick={this.increment}> + </button>
            <button onClick={this.decrement}> - </button>
        </>
        )
    }
}
