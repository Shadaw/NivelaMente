import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 80%;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 340px;

    button {
      margin-top: 1rem;
    }

    p {
      text-align: center;
      margin-top: 2rem;
    }

    a {
      font-weight: bold;
      color: var(--primary);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url('http://localhost:3000/images/background.png') no-repeat
    center;
  background-size: cover;
`;
