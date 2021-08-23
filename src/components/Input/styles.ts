import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    border: 1px solid #dedede;
  }

  & + div {
    margin-top: 1rem;
  }
`;
