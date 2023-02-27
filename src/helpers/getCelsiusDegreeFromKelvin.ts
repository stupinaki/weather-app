export function getCelsiusDegreeFromKelvin(kelvinDegree: number): string {
  return Math.round(kelvinDegree - 273.15) + "°C";
}
