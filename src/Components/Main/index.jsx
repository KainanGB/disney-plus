import { useState } from "react";
import { SideMovies } from "../SideMovies";
import { SideMenu } from "../SideMenu";
import * as S from "./style.js";

import imdb from "../../assets/IMDB-icon.png";
import LucaBG from "../../assets/luca.png";
import dragonBG from "../../assets/dragon-bg.jpg";
import spiritBG from "../../assets/spirit-bg.jpg";
import rayaBG from "../../assets/raya-bg.jpg";
import spongeBG from "../../assets/sponge-bg.png";
import playArrow from "../../assets/play-arrow.svg";
import disneyLogo from "../../assets/disney-logo.svg";

export function Main() {
  const [currentMovie, setCurrentMovie] = useState({
    title: "Luca",
    background: LucaBG,
    description:
      "Luca and Alberto dream of a life of freedom, a life of adventure — and, most of all, a life with a Vespa to ride.",
    rating: 8.8,
    id: 1,
    selected: true,
  });
  const [movies, setMovies] = useState([
    {
      category: "Kids",
      title: "Luca",
      description:
        "Luca and Alberto dream of a life of freedom, a life of adventure — and, most of all, a life with a Vespa to ride.",
      background: LucaBG,
      rating: 8.8,
      id: 1,
      selected: false,
    },
    {
      category: "Kids",
      title: "Spirit Untamed",
      description:
        "Lucky Prescott's life is changed forever when she moves from her home in the city to a small frontier town and befriends a wild mustang named Spirit.",
      background: spiritBG,
      rating: 5.5,
      id: 2,
      selected: false,
    },
    {
      category: "Kids",
      title: "Wish Dragon",
      description:
        "Determined teen Din is longing to reconnect with his childhood best friend when he meets a wish-granting dragon who shows him the magic of possibilities.",
      background: dragonBG,
      rating: 7.2,
      id: 3,
      selected: false,
    },
    {
      category: "Kids",
      title: "Raya and the Last Dragon",
      description:
        "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
      background: rayaBG,
      rating: 7.3,
      id: 4,
      selected: false,
    },
    {
      category: "Kids",
      title: "Sponge on the Run",
      description:
        "After SpongeBob's beloved pet snail Gary is snail-napped, he and Patrick embark on an epic adventure to The Lost City of Atlantic City to bring Gary home.",
      background: spongeBG,
      rating: 5.9,
      id: 5,
      selected: false,
    },
  ]);
  const [isShowing, setIsShowing] = useState(false);

  const handleSelected = (movie) => {
    //movies.find((movieIndex) => {
    //  if (movieIndex.title === movie) {
    //    {
    //      setCurrentMovie((state) => ({
    //        ...state,
    //        selected: true,
    //      }));
    //    }
    //  }
    //});
  };

  const handleBackGround = (movie) => {
    movies.find((movieIndex) => {
      if (movieIndex.title === movie) setCurrentMovie(movieIndex);
    });
  };

  return (
    <S.Content img={currentMovie.background}>
      <S.Navbar>
        <SideMenu
          movies={movies}
          isShowing={isShowing}
          setIsShowing={setIsShowing}
          handleBackGround={handleBackGround}
        ></SideMenu>
        <img src={disneyLogo} alt="disney logo" />
        <S.NavItem
          onClick={() => {
            setIsShowing((prevState) => (prevState ? false : true));
          }}
        >
          {isShowing ? (
            <>
              <S.NavMenu open></S.NavMenu>
              <S.NavMenu open></S.NavMenu>
            </>
          ) : (
            <>
              <S.NavMenu></S.NavMenu>
              <S.NavMenu></S.NavMenu>
              <S.NavMenu></S.NavMenu>
            </>
          )}
        </S.NavItem>
      </S.Navbar>
      <S.Container>
        <S.Description>
          <S.Rating>
            <S.RatingImg img={imdb} />
            <S.Span>{currentMovie.rating}</S.Span>
          </S.Rating>
          <S.labels>
            <S.Span>2021</S.Span> - <S.Span>Kids</S.Span> -
            <S.Span> Movie</S.Span>
          </S.labels>
          <S.Title>{currentMovie.title}</S.Title>
          <S.MovieDescription>{currentMovie.description}</S.MovieDescription>
          <S.WatchButton>
            <img src={playArrow} alt="play button" />
            Watch Now
          </S.WatchButton>
        </S.Description>
        <SideMovies
          handleClick={handleBackGround}
          handleSelected={handleSelected}
          movies={movies}
        />
      </S.Container>
    </S.Content>
  );
}
