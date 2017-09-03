import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import trash from '../img/trash.svg';

const Icon = styled.img`
  width: 15px;
  margin: 0;
`;
const ButtonRemove = styled.button`
  border: none;
  background: transparent;
`;
const ListItem = styled.li`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  border-bottom: 1px rgba(255, 140, 50, 0.2) solid;
  background: ${props => props.active ? 'rgba(255, 140, 50, 0.2)' : '#fff'};
  &:hover{
    background: #ffc699;
  }
`;
const Name = styled.div`
  width:50%;
  font-size:20px;
  font-weight: 700;
  overflow: hidden;
`;
const Phone = styled.div`
  color: #CAC8C8;
  font-size:18px;
`;
const Info = styled.div`
  padding: 10px;
  display: flex;
  width: 80%;
`;
const Controls = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Contact = (props) => {
  const { active, onClickSetCurrentContact, name, phone, onClickRemove } = props;
  return (
    <ListItem active={active}>
      <Info onClick={onClickSetCurrentContact}>
        <Name>
          {name}
        </Name>
        <Phone>
          {phone}
        </Phone>
      </Info>
      <Controls>
        <ButtonRemove onClick={onClickRemove}><Icon src={trash} alt="remove" /></ButtonRemove>
      </Controls>
    </ListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  active: PropTypes.bool,
  onClickRemove: PropTypes.func.isRequired,
  onClickSetCurrentContact: PropTypes.func.isRequired,
};

export default Contact;
