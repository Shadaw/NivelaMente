import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: 7rem;
  margin-bottom: 5rem;
  height: calc(100vh - 7rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  form{
    height: 100%;
    width: 100%;
  }
  
`;

export const Select = styled.select`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  border: 1px solid #dedede;
`
