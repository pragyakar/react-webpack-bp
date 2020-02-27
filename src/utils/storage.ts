interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, item: string): void;
  removeItem(key: string): void;
  clear(): void;
}

const storage = localStorage;

export function getItem(key: string) {
  return storage.getItem(key);
}

export function setItem(key: string, value: string) {
  storage.setItem(key, value);
}
