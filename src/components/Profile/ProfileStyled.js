import styled from 'styled-components';

export const ProfileClass = styled.div`
  width: 280px;
  border-radius: 8px;
  margin: 30px auto;
  background-color: #e2f9fb;
`;

export const Description = styled.div`
  padding: 40px;
  align-items: center;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 12px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Tag = styled.p`
  margin-bottom: 12px;
`;

export const Location = styled.p``;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  width: 33.33%;
  /* height: 60px; */
  padding: 12px;
  align-items: center;
  justify-content: center;
  background-color: #e8eaf1;
`;

export const Label = styled.span`
  margin-bottom: 6px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
