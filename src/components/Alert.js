import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Alert = () => {
  return <Container>Diwli special offer is goin on 50% discounts</Container>;
};

export default Alert;
