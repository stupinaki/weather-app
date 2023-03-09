import { TWeather } from "@/types/TWeather";
import { TCity } from "@/types/TCity";

export function replaceWeatherData(
  weatherData: TWeather[],
  cities: TCity[]
): TWeather[] {
  const newOrder: TWeather[] = [];

  cities.forEach((city) => {
    const weather: TWeather | undefined = weatherData.find((data) => {
      const id = data.city + ", " + data.sys.country;
      return id === city.id;
    });
    if (weather) {
      newOrder.push(weather);
    }
  });
  return newOrder;
}
