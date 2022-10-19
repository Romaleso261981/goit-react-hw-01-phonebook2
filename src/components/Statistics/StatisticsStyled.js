import styled from 'styled-components';

export const StatisticSection = styled.section`
  width: 420px;
  margin: 20px auto;
  text-align: center;
  background-color: white;
  /* padding-top: 30px; */
`;

export const Title = styled.h2`
  font-size: 35px;
  padding-top: 30px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const StatisticList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  background-color: ${getRandomHexColor};
  color: white;
  font-size: 20px;
`;

export const Label = styled.span`
  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-weight: bold;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
