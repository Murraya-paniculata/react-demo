import React, { Component } from 'react'
import withLog from './HOC/WithLog'
import withLogin from './HOC/withLogin';

class A extends Component {
  render() {
    return (
      <div>
        A组件
        {this.props.a}
        {this.props.isLogin ? '已经登陆': '未登录'}
      </div>
    )
  }
}

const WithLogA = withLog(A, {a: 456});
const WithLoginA = withLog(A, {isLogin: true});

export default class HocTestCom extends Component {
    render() {
        return (
            <div>
              <WithLogA />
                <WithLoginA />
            </div>
          )
    }
}
