import { TCoordinates } from "@/types/TCoordinates";

export async function getGeolocation(): Promise<TCoordinates | null> {
  const position = await new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => resolve(position),
      (positionError: GeolocationPositionError) => reject(positionError)
    );
  });
  const { latitude, longitude } = position.coords;
  return { latitude, longitude };
}
