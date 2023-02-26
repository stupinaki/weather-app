import { TCity } from "@/types/TCity";
import { TWeather } from "@/types/TWeather";
import { notEmpty } from "./notEmpty";
import { fetchWeatherData } from "@/api/fetchWeatherData";

export async function getWeatherData(
  cities: Array<TCity>
): Promise<TWeather[]> {
  const weathersResponse = await Promise.all(
    cities.map((city) => fetchWeatherData(city.city, city.coords))
  );
  return weathersResponse.map((v) => v.data).filter(notEmpty);
}
