export type TCity = {
  id: string;
  city: string;
  country: string;
  coords: {
    longitude: number;
    latitude: number;
  };
};
export type TApiCity = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};
