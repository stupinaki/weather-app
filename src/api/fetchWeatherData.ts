import { apiKey } from "@/constants/apiKey";
import { TWeather } from "@/types/TWeather";
import { IResponse } from "@/types/IApi";
import { TCoordinates } from "@/types/TCoordinates";

export async function fetchWeatherData(
  name: string,
  coordinates: TCoordinates
): Promise<IResponse<TWeather>> {
  const { longitude, latitude } = coordinates;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey.KEY}`;

  try {
    const data = await fetch(url);
    const result: TWeather = await data.json();
    result.city = name;
    return {
      data: result,
      error: false,
    };
  } catch (e) {
    return {
      data: null,
      error: true,
    };
  }
}
