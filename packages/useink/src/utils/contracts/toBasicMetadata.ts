import { BasicMetadataFile } from '../../react/hooks/contracts/useMetadata';

export const toBasicMetadata = async (
  file: File,
): Promise<BasicMetadataFile> => {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = ({ target }: ProgressEvent<FileReader>): void => {
      if (target?.result) {
        const name = file.name;
        const data = new Uint8Array(target.result as ArrayBuffer);
        const size = data.length;

        resolve({ data, name, size });
      }

      reject('Target result not found in file');
    };

    reader.readAsArrayBuffer(file);
  });
};
