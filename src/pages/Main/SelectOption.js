import { Select } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Option } = Select;
const SelectOption = ({ sort }) => (
  <SelectWrapper>
    <Select
      defaultValue="최신순"
      style={{
        width: 120,
      }}
      onChange={sort}
    >
      <Option value="date" style={{ fontFamily: 'Gill Sans' }}>
        최신순
      </Option>
      <Option value="like" style={{ fontFamily: 'Gill Sans' }}>
        좋아요순
      </Option>
    </Select>
  </SelectWrapper>
);

export default SelectOption;

const SelectWrapper = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
