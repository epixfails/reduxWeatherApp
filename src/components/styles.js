import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`;

export const AppWrap = styled.div`
  margin:0 auto;
  width: 80%;
  display: flex;
  flex-direction: row;
`;

export const ContactList = styled.div`
  width: 60%;
  padding: 10px 0;
`;

export const CityWeather = styled.div`
  width: 40%;
`;

export const ContactName = styled.div`
  width:50%;
  font-size:20px;
  font-weight: 700;
  overflow: hidden;
`;
export const AddContactWrapper = styled.div`
  margin-top: 20px;
`;

export const ContactPhone = styled.div`
  color: #CAC8C8;
  font-size:18px;
`;

export const ContactControls = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LinkAddMore = styled.span`
  display: inline-block;
  cursor: pointer;
  color: #FF8C32;
  margin: 10px 0 14px;
`;

export const AddInfo = styled.div`
  margin-bottom: 10px;
`;

export const InputSubmit = styled.button`
  width:100%;
  background-color:#fff;
  border: 1px #FF8C32 solid;
  padding: 8px;
  font-size: 18px;
  &:hover {
    background: #FF8C32;
    color: #fff;
  }
`;

export const Input = styled.input`
  width:100%;
  overflow: hidden;
  line-height:24px;
  font-size: 16px;
  margin: 5px 0;
  padding-left:10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

export const List = styled.ul`
  padding:0px;
  margin:0 auto;
  width:100%;
  height: 220px;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 10px;
  border-bottom: 1px rgba(255, 140, 50, 0.2) solid;
  &::after{
  }
`;

export const ListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  text-align: center;
  font-size: 24px;
  color: #FF8C32;
`;
export const ImgEmptyList = styled.img`
  display: block;
  height: 100px;
`;

export const ButtonRemove = styled.button`
  border: none;
  background: #fff;
`;

export const Icon = styled.img`
  width: ${props => props.city ? '35px' : '15px'};
  float: ${props => props.city ? 'left' : 'none'};
  margin: ${props => props.city ? '5px' : '0'};

`;
export const IconWeather = styled.img`
  width: 25px;
  height: 20px;
`;
