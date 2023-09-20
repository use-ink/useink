import classNames from 'classnames';
import { createRef } from 'react';
import Dropzone, { DropzoneOptions, DropzoneRef } from 'react-dropzone';

export interface Props {
  onDrop: Pick<DropzoneOptions, 'onDrop'>['onDrop'];
  cta: string;
}

export const FileDropper: React.FC<Props> = ({ onDrop, cta }) => {
  const ref = createRef<DropzoneRef>();

  return (
    <Dropzone multiple={false} onDrop={onDrop} ref={ref}>
      {({ getInputProps, getRootProps }) => {
        return (
          <div {...getRootProps()}>
            <label
              className={classNames(
                'flex cursor-pointer flex-col items-center justify-center rounded-3xl',
                'border border-dashed border-gray-200 py-6 px-4 font-normal text-white/70',
                'dark:border-white/20 dark:text-white-70 max-w-5xl mx-auto transition duration-75',
                'hover:bg-brand-500/10',
              )}
              htmlFor='file'
            >
              <img alt='squink' className='h-20 mb-6' src='squink.svg' />
              <span className='text-sm text-gray-400 dark:text-gray-500'>
                {cta}
              </span>
            </label>
            <input {...getInputProps()} />
          </div>
        );
      }}
    </Dropzone>
  );
};
