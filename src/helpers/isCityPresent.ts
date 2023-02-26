import { TCity } from "@/types/TCity";

export function isCityPresent(cities: TCity[], city: TCity): boolean {
  return cities.some((c) => {
    const isTheSameLatitude = city.coords.latitude === c.coords.latitude;
    const isTheSameLongitude = city.coords.longitude === c.coords.longitude;
    return isTheSameLatitude && isTheSameLongitude;
  });
}
