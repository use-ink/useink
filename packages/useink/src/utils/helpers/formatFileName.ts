interface FileState {
  name: string;
  size?: number;
}

export const formatFileName = ({ name, size }: FileState): string =>
  size !== undefined ? `${name} (${(size / 1000).toFixed(2)}kb)` : name;
