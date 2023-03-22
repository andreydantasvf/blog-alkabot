import styled from "styled-components";

export const Container = styled.button`
  position: fixed;

  padding: 1.4rem;
  border: none;
  border-radius: 1rem;

  bottom: 2rem;
  right: 1.3rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: #469fbf;
  color: #fff;

  > svg path {
    stroke: #fff;
  }
`;