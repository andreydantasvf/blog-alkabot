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

    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Input = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 0.8rem;
  border: 1px solid #747474;
  padding: 1.6rem;

  > input {
    width: 100%;

    border: none;
    background: none;
  }
`;

export const Posts = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
