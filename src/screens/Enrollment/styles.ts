import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 7rem;
  margin-bottom: 5rem;
  height: calc(100vh - 7rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 60%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  h1 {
    font-weight: bold;
    margin-bottom: 20px;
  }

`;
