import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /*padding: 0 8em;*/
  align-items: center;
  height: 80%;

  max-width: 1400px;

  padding: 0 6em;
  margin: 0 auto;

  overflow-y: hidden;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 5em 0 5em;
  z-index: 99;

  @media (max-width: 860px) {
    padding: 1em 2em 0 2em;
  }

  img {
    width: 5rem;
    z-index: 99;
    cursor: pointer;
  }
`;

export const NavItem = styled.div`
  z-index: 99;

  cursor: pointer;
`;

export const NavMenu = styled.span`
  display: none;
  width: 2rem;
  height: 0.15rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  position: relative;

  @media (max-width: 860px) {
    display: block;
  }

  &:nth-child(1) {
    transform: ${(props) => (props.open ? "rotate(133deg)" : "rotate(0)")};
    transition: transform 1s;
  }

  &:nth-child(2) {
    position: ${(props) => (props.open ? "relative" : "block")};
    top: ${(props) => (props.open ? "-10.4px" : "unset")};
    transform: ${(props) => (props.open ? "rotate(226deg)" : "rotate(0)")};

    transition: transform 1s;
  }

  &:nth-child(3) {
    width: 1.3rem;
  }
`;

export const Content = styled.div`
  background-image: url(${(props) => props.img}),
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3) 500px,
      rgba(255, 0, 0, 0) 600px
    );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  background-blend-mode: overlay;
  height: 100vh;

  margin: 0 auto;
`;

export const Description = styled.div`
  width: 25rem;

  @media (max-width: 860px) {
    width: 80%;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  width: 4rem;
`;

export const labels = styled.div`
  padding: 0.5em 0;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0em;
  letter-spacing: 4px;

  @media (max-width: 860px) {
    font-size: 2rem;
  }
`;

export const Span = styled.span``;

export const MovieDescription = styled.p`
  line-height: 1.5rem;

  @media (max-width: 860px) {
    font-size: 0.85rem;
  }
`;

export const WatchButton = styled.button`
  display: flex;
  align-items: center;
  background: linear-gradient(
    to bottom,
    #0f3a7b -58.45%,
    #0f3a7b -58.4%,
    #0cffff 374.49%
  );
  box-shadow: 0px 3px 50px rgba(0, 0, 0, 0.160784);
  border-radius: 2em;
  font-size: 16px;
  color: #fff;
  border: none;
  padding: 1em 2em;
  letter-spacing: 0.6px;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  transition: transform 1s;
  img {
    width: 1rem;
    margin-right: 1rem;
  }
`;

export const RatingImg = styled.img`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0.5rem;
`;
