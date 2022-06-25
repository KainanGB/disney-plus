import styled from "styled-components";

export const SideBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  transform: ${(props) =>
    props.isShowing === false
      ? "translate3d( 100vw, 0, 0)"
      : "translate3d( 0vw, 0, 0)"};
  transition: transform 1s;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 95;
  padding-top: 1rem;

  @media (min-width: 860px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  letter-spacing: 1px;

  position: absolute;
  right: 10.6rem;
  top: 2.7rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  height: 75vh;

  margin-right: -2em;

  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 6em;

  align-items: end;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  min-height: 8rem;
  width: 15rem;

  border-radius: 1rem;
  margin: 0em 1em 1.5em 0em;

  /*overflow: hidden;*/
  position: relative;

  &:first-child {
    margin-top: 0.5em;
  }

  &:hover {
    transform: scale(1.1);
  }

  transition: transform 1s;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);

  height: 8rem;
  border-radius: 1rem;

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
