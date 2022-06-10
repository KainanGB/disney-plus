import * as S from "./style.js";

import playBtn from "../../assets/play-btn.svg";
import { useState } from "react";

export function SideMovies({ movies, handleClick, handleSelected }) {
  return (
    <S.Content>
      <S.Title>Movies</S.Title>
      <S.Cards>
        {movies.map((movie, index) => (
          <S.Card
            className={movie.selected ? "selected" : ""}
            key={index}
            img={movie.background}
            onClick={(e) => {
              handleClick(movie.title);
              handleSelected(movie.title);
            }}
          >
            <S.CardDescription img={playBtn}>
              <S.CardCategory>{movie.category}</S.CardCategory>
              <S.CardTitle>{movie.title}</S.CardTitle>
            </S.CardDescription>
          </S.Card>
        ))}
      </S.Cards>
    </S.Content>
  );
}
