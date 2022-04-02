import React, { Component } from 'react'

export default function withLog(Com, props) {
  class LogWrapper extends Component {

    componentDidMount() {
        console.log(`日志：组件${Com.name}被创建啦`);
        console.log(props);
    }

    componentWillUnmount () {
        console.log(`日志：组件${Com.name}被销毁啦`)
    }

    render() {
      return (
        <Com {...props} />
      )
    }
  }

  return LogWrapper;
}
