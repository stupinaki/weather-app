export interface IResponse<T> {
  data: T | null;
  error: boolean;
}

export interface IOnFocus<T extends HTMLElement> {
  target: T | null;
}
