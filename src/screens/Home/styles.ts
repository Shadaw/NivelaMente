import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 7rem;
  height: calc(100vh - 7rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 60%;
  }
`;

export const Hero = styled.section`
  max-width: 30%;

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: bold;
  }

  p {
    margin-top: 1rem;
    color: #b0b0b0;
  }

  button {
    font-size: 1rem;
    margin-top: 2rem;
  }
`;
