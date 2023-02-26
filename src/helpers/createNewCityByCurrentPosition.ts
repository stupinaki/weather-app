import { TApiCity, TCity } from "@/types/TCity";

export function createNewCityByCurrentPosition(data: TApiCity): TCity {
  return {
    city: data.name,
    country: data.country,
    coords: {
      longitude: data.lon,
      latitude: data.lat,
    },
  };
}
