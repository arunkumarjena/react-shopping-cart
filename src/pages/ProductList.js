import styled from "styled-components";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Products from "../components/Products";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;


const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Alert />
      <Title>Dresses</Title>
      <Products />
      <Subscribe />
      <Footer />
    </Container>
  );
};

export default ProductList;
