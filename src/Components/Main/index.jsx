import { SideMovies } from "../SideMovies";
import * as S from "./style.js";
import imdb from "../../assets/IMDB-icon.png";
import backgroundImg from "../../assets/luca.png";
import playArrow from "../../assets/play-arrow.svg";
import disneyLogo from "../../assets/disney-logo.svg";

export function Main() {
  return (
    <S.Content img={backgroundImg}>
      <S.Navbar>
        <img src={disneyLogo} alt="" />
        <S.NavItem>
          <span>a</span>
          <span></span>
          <span></span>
        </S.NavItem>
      </S.Navbar>
      <S.Container>
        <S.Description>
          <S.Rating>
            <S.RatingImg img={imdb} />
            <S.Span>8.8</S.Span>
          </S.Rating>
          <S.labels>
            <S.Span>2021</S.Span> - <S.Span>Kids</S.Span> -{" "}
            <S.Span>Movie</S.Span>
          </S.labels>
          <S.Title>LUCA</S.Title>
          <S.MovieDescription>
            Luca and Alberto dream of a life of freedom, a life of adventure —
            and, most of all, a life with a Vespa to ride.{" "}
          </S.MovieDescription>
          <S.WatchButton>
            <img src={playArrow} alt="play button" />
            Watch Now
          </S.WatchButton>
        </S.Description>
        <SideMovies />
      </S.Container>
    </S.Content>
  );
}
