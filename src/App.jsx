import React from 'react';
import { TimePicker, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import RefDemo from './components/RefDemo';

export default function App() {
  return (
    <div>
      <RefDemo />
    </div>
  )
}
