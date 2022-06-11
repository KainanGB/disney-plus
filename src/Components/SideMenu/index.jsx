import * as S from "./style.js";

import playBtn from "../../assets/play-btn.svg";
import { useState } from "react";

export function SideMenu({
  movies,
  isShowing,
  setIsShowing,
  handleBackGround,
}) {
  return (
    <S.SideBar isShowing={isShowing}>
      <S.Cards>
        {movies.map((movie, index) => (
          <S.Card
            key={index}
            img={movie.background}
            onClick={() => {
              setIsShowing((prevState) => (prevState ? false : true));
              handleBackGround(movie.title);
            }}
          >
            <S.CardDescription img={playBtn}>
              <S.CardCategory>{movie.category}</S.CardCategory>
              <S.CardTitle>{movie.title}</S.CardTitle>
            </S.CardDescription>
          </S.Card>
        ))}
      </S.Cards>
    </S.SideBar>
  );
}
