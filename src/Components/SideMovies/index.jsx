import * as S from "./style.js";
import SpiritImg from "../../assets/spiritUntamed.png";
import dragonImg from "../../assets/dragon.png";
import rayaImg from "../../assets/raya.png";
import bobSponjaImg from "../../assets/bobSponja.png";
import LucaImg from "../../assets/luca.png";
import playBtn from "../../assets/play-btn.svg";

export function SideMovies() {
  return (
    <S.Content>
      <S.Title>Movies</S.Title>
      <S.Cards>
        <S.Card img={LucaImg}>
          <S.CardDescription img={playBtn}>
            <S.CardCategory>Kids</S.CardCategory>
            <S.CardTitle>Luca</S.CardTitle>
          </S.CardDescription>
        </S.Card>

        <S.Card img={SpiritImg}>
          <S.CardDescription img={playBtn}>
            <S.CardCategory>Kids</S.CardCategory>
            <S.CardTitle>Spirit Untamed</S.CardTitle>
          </S.CardDescription>
        </S.Card>

        <S.Card img={dragonImg}>
          <S.CardDescription img={playBtn}>
            <S.CardCategory>Kids</S.CardCategory>
            <S.CardTitle>Wish Dragon</S.CardTitle>
          </S.CardDescription>
        </S.Card>

        <S.Card img={rayaImg}>
          <S.CardDescription img={playBtn}>
            <S.CardCategory>Kids</S.CardCategory>
            <S.CardTitle>Raya and the Last Dragon</S.CardTitle>
          </S.CardDescription>
        </S.Card>

        <S.Card img={bobSponjaImg}>
          <S.CardDescription img={playBtn}>
            <S.CardCategory>Kids</S.CardCategory>
            <S.CardTitle>Sponge on the Run</S.CardTitle>
          </S.CardDescription>
        </S.Card>
      </S.Cards>
    </S.Content>
  );
}
