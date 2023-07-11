import { Link as _Link } from "react-router-dom";
import Layout from "../components/Layout";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 15rem;
  font-weight: bold;
  color: #111;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #222;
  text-align: justify;
  margin-bottom: 20px;
`;

const Link = styled(_Link)`
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
`;

function NotFound() {
  return (
    <Layout>
      <Container>
        <Text>404</Text>
        <Paragraph>এই পেইজটি খুজে পাওয়া যায় নি।</Paragraph>
        <Link to="/">হোম পেইজে ফিরে যান</Link>
      </Container>
    </Layout>
  );
}

export default NotFound;
