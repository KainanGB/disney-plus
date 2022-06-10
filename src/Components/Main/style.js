import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5em;
  height: 100vh;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 5em 0 5em;
  img {
    width: 5rem;
  }
`;

export const NavItem = styled.div``;

export const Content = styled.div`
  background-image: url(${(props) => props.img}),
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3) 300px,
      rgba(255, 0, 0, 0) 400px
    );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  /*background-color: rgba(0, 0, 0, 0.1);*/
  background-blend-mode: overlay;
`;

export const Description = styled.div`
  width: 16.6rem;
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
`;

export const Span = styled.span``;

export const MovieDescription = styled.p`
  line-height: 1.5rem;
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
