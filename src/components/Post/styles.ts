import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  background: #fff;
  padding: 1rem;
  border-radius: 0.8rem;

  cursor: pointer;
`;

export const ImageUser = styled.div`
  width: 5.5rem;
  height: 5rem;

  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.gray};

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
`;

export const Content = styled.div`
  width: 100%;
  word-break: break-all;

  > .user {
    display: flex;
    flex-direction: column;

    .name {
      font-weight: 500;
      font-size: 1.8rem;
    }

    .email {
      color: ${({theme}) => theme.colors.text_300};
    }
  }

  > h2 {
    font-family: "Roboto Slab", serif;
    margin: 1rem 0;
  }

  > .comments {
    margin-top: 1rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
  }
`;