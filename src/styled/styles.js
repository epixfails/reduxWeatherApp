import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`;

export const ContactName = styled.div`
  width:50%;
  font-size:20px;
  font-weight: 700;
`;
export const AddContactWrapper = styled.div`
  margin-top: 20px;
`;

export const ContactPhone = styled.div`
  color: #CAC8C8;
  font-size:18px;
`;

export const ContactList = styled.div`
  margin:0 auto;
  width: 40%;
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
  padding: 5px 10px;
  border-bottom: 1px rgba(255, 140, 50, 0.2) solid;
  background: #fff;
`;

ListItem.defaultProps = {
  theme: {
    main: 'blue',
  },
};

export const theme = {
  main: 'mediumseagreen',
};


export const ButtonRemove = styled.button`
  border: none;
  background: #fff;
`;

export const Icon = styled.img`
  width: 15px;
`;

export const Label = styled.label`
  position: relative;
  padding-left: 20px;
  display: inline-block;
  margin: 5px 0px;
`;

export const CheckboxImportance = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  left: 0;
  top: 2px;
`;
