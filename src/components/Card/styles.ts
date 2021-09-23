import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px #dadada;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;

export const Content = styled.div`
  padding: 10px 30px;

  strong {
    font-size: 20px;
    margin-bottom: 5px;
  }

  p {
    color: #676767;
    font-size: 16px;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #dadada;
    padding-top: 10px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;

      color: #fff;
      background-color: var(--primary);
      padding: 5px;
      border: none;
      border-radius: 100%;

      font-size: 18px;
      transition: box-shadow, filter 0.2s;

      &:hover {
        filter: brightness(0.9);
        box-shadow: 0 0 10px #dadada;
      }
    }
  }
`;

export const Info = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1rem;
    max-height: 3rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 50px;
    width: 100%;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
`;
