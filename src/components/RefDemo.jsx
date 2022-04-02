/**
 * Ref 练习
 */
import React, { Component } from 'react'

class A extends Component {

    methed() {
        console.log("A中的方法被调用了")
    }

    render() {
        return <h1>
            i am a component
        </h1>
    }
}

export default class RefDemo extends Component {

    constructor(props) {
        super(props);
        this.aRef = {
            current: null
        }
        // this.aRef = React.createRef();
    }

    handleClick = () => {
        console.log(this);
        this.refs.text.focus();
    }

    callMethod = () => {
        this.aRef.current.methed();
    }

  render() {
    return (
      <div>
        <input type="text" ref="text" />
        <A ref={this.aRef} />
        <button onClick={this.handleClick}>聚焦</button>
        <button onClick={this.callMethod}>方法调用</button>
      </div>
    )
  }
}
