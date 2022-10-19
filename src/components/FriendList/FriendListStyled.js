import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 280px;
  text-align: center;
  list-style: none;
  margin: 20px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  height: 65px;
  border: 1px solid black;
  box-shadow: 1px 1px 4px 1px #252525;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 16px;
  background-color: ${p => (p.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 16px;
`;

export const Name = styled.p`
  margin-left: 18px;
  font-size: 30px;
`;
