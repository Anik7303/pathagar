import { Link as _Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const Column = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Link = styled(_Link)`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
`;

const PageLinks = () => (
  <Container>
    <Column>
      <li>
        <Link to="/history">প্রতিষ্ঠার ইতিহাস</Link>
      </li>
      <li>
        <Link to="/board-of-directors">পরিচালনা পরিষদ</Link>
      </li>
      <li>
        <Link to="/executive-council">কার্যকরী পরিষদ</Link>
      </li>
      <li>
        <Link to="/purpose">উদ্দেশ্য</Link>
      </li>
      <li>
        <Link to="/publications">প্রকাশনা</Link>
      </li>
    </Column>
    <Column>
      <li>
        <Link to="/prizes">পুরুষ্কার</Link>
      </li>
      <li>
        <Link to="/scholarships">বৃত্তি</Link>
      </li>
      <li>
        <Link to="/gallery/images">ছবি</Link>
      </li>
      <li>
        <Link to="/gallery/videos">ভিডিও</Link>
      </li>
    </Column>
  </Container>
);

export default PageLinks;
