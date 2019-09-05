import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 13.2px;
`;
const Text = styled.h3`
  color: #727272;
  margin: 1.1rem;
  text-align: center;
  font-size: 18.9px;
`;

export default function Header(props) {
  return (
    <Container>
      <Text>{props.date}</Text>
      <Text>{props.title}</Text>
    </Container>
  );
}

Header.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
