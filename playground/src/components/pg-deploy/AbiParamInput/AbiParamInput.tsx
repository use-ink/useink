import { InputHTMLAttributes } from 'react';
import { AbiParam } from 'useink/core';
import { JSType, toJSType } from 'useink/utils';

interface Props {
  abiParam: AbiParam;
  onChange: (e: InputHTMLAttributes<HTMLInputElement>, jsType: JSType) => void;
}

export const AbiParamInput: React.FC<Props> = ({ abiParam }) => {
  const [typeDefType, jsType] = toJSType(abiParam);

  switch (jsType) {
    case 'number':
      return (
        <p className='mt-3 text-green-500'>
          <b className='underline'>{abiParam.name}</b> - TODO implement a number
          input
        </p>
      );

    case 'string':
      return (
        <p className='mt-3 text-green-500'>
          <b className='underline'>{abiParam.name}</b> - TODO implement a text
          input that handles strings
        </p>
      );

    case 'BN':
      return (
        <p className='mt-3 text-green-500'>
          <b className='underline'>{abiParam.name}</b> - TODO implement an input
          that handles BN types
        </p>
      );

    case 'Bytes':
      return (
        <p className='mt-3 text-green-500'>
          <b className='underline'>{abiParam.name}</b> - TODO implement an input
          that handles Byte types. Probably a text field that is later converted
          to bytes...
        </p>
      );

    case 'boolean':
      return (
        <p className='mt-3 text-green-500'>
          <b className='underline'>{abiParam.name}</b> - TODO implement a radio
          input for booleans
        </p>
      );

    case 'null':
      return (
        <p className='mt-3 text-green-500'>
          <b className='underline'>{abiParam.name}</b> - TODO implement an input
          that is always null.
        </p>
      );

    default:
      return (
        <p className='text-red-500 font-semibold'>
          <b className='underline'>{abiParam.name}</b> : Unknown input field for
          type {typeDefType}
        </p>
      );
  }
};
