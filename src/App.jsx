import React from 'react';
import { TimePicker, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
// import RefDemo from './components/RefDemo';
// import ForWardRef from './components/ForwardRef';
import HocTestCom from './components/HocTestCom';
import store from './store';

export default function App() {
  return (
    <div>
      {/* <RefDemo /> */}
      {/* <ForWardRef /> */}
      <HocTestCom />
    </div>
  )
}
