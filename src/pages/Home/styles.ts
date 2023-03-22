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
    padding: 1.3rem 1.3rem 8rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
      padding: 1.3rem 20%;
    }
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
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;