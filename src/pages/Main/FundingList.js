import React from 'react';
import Item from './Item';
import styled from 'styled-components';
import SelectOption from './SelectOption';

const FundingList = ({ setFundingItems, fundingItems }) => {
  const sort = value => {
    if (value === 'date') {
      const result = [...fundingItems].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setFundingItems(result);
    } else if (value === 'like') {
      const result = [...fundingItems].sort(
        (a, b) => b.like_count - a.like_count
      );
      setFundingItems(result);
    }
  };
  return (
    <ItemWrapper>
      <SelectionWrapper>
        <SelectOption sort={sort} />
      </SelectionWrapper>
      {fundingItems.map(
        ({
          id,
          thumbnail,
          category,
          title,
          summary,
          target_amount,
          total_amount,
          remain_days,
          date,
          like_count,
        }) => {
          return (
            <Item
              key={id}
              id={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              summary={summary}
              target_amount={target_amount}
              total_amount={total_amount}
              remain_days={remain_days}
              date={date}
              like_count={like_count}
            />
          );
        }
      )}
    </ItemWrapper>
  );
};

export default FundingList;

const ItemWrapper = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  font-family: sans-serif;
  font-size: 14px;
`;

const SelectionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 7px;
`;
