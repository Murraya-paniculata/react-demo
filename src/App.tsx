import React from 'react';
import { TimePicker, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import { ddd } from './test';

ddd(1000).then((res) => {
  console.log('wait one min');
})

export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <TimePicker />
      <div>
        hello react
      </div>
    </ConfigProvider>
  )
}
