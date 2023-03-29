import { apiKey } from "@/constants/apiKey";
import { TApiCity, TCity } from "@/types/TCity";
import { IResponse } from "@/types/IApi";
import { createNewCityByCurrentPosition } from "@/helpers/createNewCityByCurrentPosition";

export async function fetchCityByName(
  cityName: string
): Promise<IResponse<TCity[]>> {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=100&appid=${apiKey.KEY}`;

  try {
    const result = await fetch(url);
    const json: TApiCity[] = await result.json();
    return {
      data: json.map(createNewCityByCurrentPosition),
      error: false,
    };
  } catch (e) {
    return {
      data: [],
      error: true,
    };
  }
}
