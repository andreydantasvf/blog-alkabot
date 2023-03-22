import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;

  background: #fff;
  padding: 1rem 1rem 2rem;
  border-radius: 0.8rem;
`;

export const ImageUser = styled.div`
  width: 5.5rem;
  height: 5rem;

  border-radius: 50%;
  background-color: #ccc;

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
    margin-bottom: 2rem;

    .name {
      font-weight: 500;
      font-size: 1.8rem;
    }

    .email {
      color: #71767b;
    }
  }
`;