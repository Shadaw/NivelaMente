import styled from 'styled-components';

export const Container = styled.header`
  height: 7rem;
  background: var(--background);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

export const Content = styled.div`
  max-width: 1220px;
  height: 7rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    margin-left: 5rem;
    height: 5rem;

    button {
      margin-left: 2rem;
    }

    > div {
      margin-left: 2rem;
    }
  }
`;
