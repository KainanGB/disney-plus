import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  width: 300px;
`;

export const Title = styled.h1`
  /*position: absolute;*/
  font-size: 1.75rem;
  letter-spacing: 1px;
  margin-left: 1.95rem;
  margin-top: 3rem;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const Cards = styled.div`
  height: 450px;
  padding: 1em 3em 2em 2em;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 8rem;
  width: 15rem;

  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 1rem;
  margin: 0 0 1.5em 0;

  &:hover {
    transform: scale(1.1);
  }

  transition: transform 1s;

  overflow: hidden;
  position: relative;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  height: 8rem;

  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;
`;

export const CardTitle = styled.span`
  position: relative;
  top: 5rem;
  left: 0.5rem;

  font-weight: bold;
  letter-spacing: 1px;
`;

export const CardCategory = styled.small`
  position: relative;
  top: 5rem;
  left: 0.5rem;
  margin-bottom: 0.5rem;
`;
