import { TCity } from "@/types/TCity";

export function addDataToLocalStorage(key: string, value: TCity[]): void {
  const newStorageValueStr = JSON.stringify(value);
  localStorage.setItem(key, newStorageValueStr);
}

export function getDataFromLocalStorage(key: string): TCity[] {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : [];
}
