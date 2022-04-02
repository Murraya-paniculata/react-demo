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
        // this.aRef = React.createRef(); // 和上面的对象是等价的
    }

    handleClick = () => {
        console.log(this);
        this.refs.text.focus();
    }

    callMethod = () => {
        this.aRef.current.methed();
    }

    getRef = (el) => {
        console.log("方法被调用了")
        this.aRef = el;
        console.log(22, this.aRef);
    }

    componentDidMount() {
        console.log(11);
    }

  render() {
    return (
      <div>
        <input type="text" ref="text" />
        <A ref={this.aRef} />
        <A ref={this.getRef}/>
        <button onClick={this.handleClick}>聚焦</button>
      </div>
    )
  }
}
