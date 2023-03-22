import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 8rem auto;
  grid-template-areas: "header" "content";

  > main {
    height: 100%;
    grid-area: content;
    padding: 1.3rem;

    .count-comments {
      font-weight: 600;
      font-size: 2rem;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Post = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  background: #FFF;
  padding: 1rem 1rem 2rem;
  border-radius: .8rem;
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
`;

export const Comments = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;