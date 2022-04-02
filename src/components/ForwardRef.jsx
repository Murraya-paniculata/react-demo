import React, { Component } from 'react'

function A (props) {
    return <>
        <h1 ref={props.abc} >A 组件</h1>
        <p>{props.content}</p>
    </>
}

const NewA = React.forwardRef((props, ref) => {
    console.log(props, ref);
    return <A {...props} abc = {ref} />
})

export default class ForwardRef extends Component {

    constructor(props) {
        super(props);
        this.aRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.aRef);
    }

  render() {
    return (
      <div>
        <NewA content="内容" ref={this.aRef} />
      </div>
    )
  }
}
