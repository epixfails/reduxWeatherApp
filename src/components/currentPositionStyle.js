import styled from 'styled-components';

export const CurrentPositionTitle = styled.p`
  font-weight: 700;
  margin: 5px;
  color: #FF8C32;
`;

export const CurrentPositionWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  margin: 10px 20px 10px 0;
  border-bottom: 1px #FF8C32 solid;
`;

export const CurrentPositionIcon = styled.img`
  display: block;
`;

export const CurrentPositionInfo = styled.p`
  margin: 5px;
  margin-right: 40px;
`;

export const CurrentPositionBtn = styled.button`
  background: #fff;
  border: 1px #FF8C32 solid;
  display: block;
  font-weight: 700;
  padding: 5px 20px;
  &:hover {
    background: #FF8C32;
    color: #fff;
  }
`;

export const CurrentPositionInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
