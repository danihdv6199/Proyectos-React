import { useState } from "react";
import { GetGifsByQuery } from "./../actions/get-gifs-by-query.action";
import { Gif } from "./../interfaces/gif.interface";

const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>(["Goku"]);
  const [gifs, setGifs] = useState<Gif[]>();

  const onTermClicked = async (term: string) => {
    if (gifsCache[term]) {
      setGifs(gifsCache[term]);
      return;
    }
    const gifs = await GetGifsByQuery(term);
    setGifs(gifs);
  };

  const onSearch = async (value: string) => {
    value = value.trim().toLowerCase();

    if (value.length === 0) return;
    if (previousTerms.includes(value)) return;

    const currentTerms = previousTerms.slice(0, 6);
    currentTerms.unshift(value);

    setPreviousTerms(currentTerms);

    const gifs = await GetGifsByQuery(value);
    setGifs(gifs);

    gifsCache[value] = gifs;
  };
  return {
    gifs,
    onTermClicked,
    onSearch,
    previousTerms,
  };
};
