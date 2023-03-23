import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 8rem;
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.text_100};
  font-size: 2rem;
  letter-spacing: 1rem;
`;