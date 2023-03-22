import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  
  background: #FFF;
  padding: 1rem;
  border-radius: .8rem;

  cursor: pointer;
`;

export const ImageUser = styled.div`
  width: 5.5rem;
  height: 5rem;

  border-radius: 50%;
  background-color: #CCC;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #FFF;
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
      color: #71767b;
    }
  }

  > h2 {
    margin: 1rem 0;
  }

  > .comments {
    margin-top: 1rem;
    display: flex;
    justify-content: end;
    gap: .3rem;
  }
`;