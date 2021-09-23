import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 7rem;
  margin-bottom: 5rem;
  height: calc(100vh - 7rem);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 2rem;
`;
