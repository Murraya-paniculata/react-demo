import React from 'react'
import { TimePicker, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <TimePicker />
        hello react
      </ConfigProvider>
    </div>
  )
}
