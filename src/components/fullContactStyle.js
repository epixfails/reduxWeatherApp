import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FullInfo = styled.div`
  width: 40%;
  padding: 10px 20px;
`;

export const NavLink = styled(Link)`
  width: 50%;
  display: block;
  padding: 10px;
  color: #FF8C32;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  &:hover{
    background: #FF8C32;
    color: #fff;
  }
  &:focus{
  }
`;

export const FullContactWrap = styled.div`

`;

export const FullContactActual = styled.div`

`;
export const FullContactImgWrap = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 0;
`;
export const Image = styled.img`
  width: 150px;
`;

export const LayoutRouter = styled.div`

`;

export const FullContactTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const FullContactItem = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const FullInfoNavWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px #CAC8C8 solid;
`;

export const FullInfoNavTab = styled.div`

`;
