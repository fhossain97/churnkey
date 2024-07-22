import { type MovieAPIResponse } from "./types";

const addQueryParam = (url: string, queryText: string) => {
  const modifiedURL = new URL(url);
  const searchParams = new URLSearchParams(modifiedURL.search);
  const formattedQuery = queryText.toLowerCase().replaceAll(" ", "%");
  searchParams.set("query", formattedQuery);
  modifiedURL.search = decodeURI(String(searchParams));
  return modifiedURL.toString();
};

export const TMDB = async (
  base_url: string,
  endpoint: string,
  queryText?: string,
) => {
  let url = `${base_url}${endpoint}?page=1&language=en`;

  if (typeof queryText !== undefined) {
    url = addQueryParam(url, String(queryText));
  }

  try {
    const movieRes = (await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TMDB_READ_ONLY_TOKEN}`,
        Accept: "application/json",
      },
    }).then((res) => res.json())) as MovieAPIResponse;
    return movieRes.results;
  } catch (error) {
    throw new Error(
      `Unable to fetch data at /${endpoint}. Error: ${JSON.stringify(error)}.`,
    );
  }
};

export const formatBillingDate = (date: string) => {
  const arr = date.split("-");
  return `${arr[1]}/${arr[2]}/${arr[0]}`;
};
