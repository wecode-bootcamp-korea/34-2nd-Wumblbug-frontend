import React from 'react';
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

const Dates = ({ setStartDate, setEndDate }) => (
  <Space direction="vertical" size={12}>
    <RangePicker
      name="start_datetime"
      onChange={e => {
        setStartDate(e[0]._d.toLocaleString('en-CA').split(',').shift());
        setEndDate(e[1]._d.toLocaleString('en-CA').split(',').shift());
      }}
    />
  </Space>
);

export default Dates;
