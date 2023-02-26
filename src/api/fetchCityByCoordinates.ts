import { apiKey } from "@/constants/apiKey";
import { TApiCity, TCity } from "@/types/TCity";
import { IResponse } from "@/types/IApi";
import { TCoordinates } from "@/types/TCoordinates";
import { createNewCityByCurrentPosition } from "@/helpers/createNewCityByCurrentPosition";

export async function fetchCityByCoordinates(
  coordinates: TCoordinates
): Promise<IResponse<TCity[]>> {
  const { longitude, latitude } = coordinates;
  const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey.KEY}`;

  try {
    const result = await fetch(url);
    const json: TApiCity[] = await result.json();
    return {
      data: json.map(createNewCityByCurrentPosition),
      error: false,
    };
  } catch (e) {
    return {
      data: null,
      error: true,
    };
  }
}
