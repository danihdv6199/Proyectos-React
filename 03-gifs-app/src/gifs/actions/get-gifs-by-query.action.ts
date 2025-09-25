import { giphyApi } from "../api/giphy.api";
import { Gif } from "../interfaces/gif.interface";
import { GiphyResponse } from "../interfaces/giphy.response";

export const GetGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi.get<GiphyResponse>("/search", {
    params: {
      q: query,
      limit: 10,
    },
  });
  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));
  // response.data.data[0].
};
