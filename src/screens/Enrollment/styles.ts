import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 7rem;
  margin-bottom: 5rem;
  height: 100%;
  min-height: calc(100vh - 7rem);

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  h1 {
    color: var(--negative);
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const ImgContent = styled.img`
  width: 100%;
  height: 340px;
  border-radius: 5px;
  border: solid var(--negative) 2px;
  object-fit: cover;
`;

export const UserField = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;

  div {
    margin-right: 20px;
  }
`;
