import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & + {
    margin-top: 1rem;
  }

  label {
    display: block;
    margin-right: 10px;
  }
`;
