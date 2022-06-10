import styled from "styled-components";

export const Content = styled.div``;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const Cards = styled.div`
  width: 220px;
  height: 450px;
  padding-right: 3em;
  overflow-y: scroll;
  overflow-x: hidden;
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
