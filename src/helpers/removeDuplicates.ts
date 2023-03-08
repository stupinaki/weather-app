import { TCity } from "@/types/TCity";

export function removeDuplicates(cities: TCity[]): TCity[] {
  const map: Record<string, TCity> = {};
  cities.forEach((v) => (map[v.id] = v));
  return Object.values(map);
}
