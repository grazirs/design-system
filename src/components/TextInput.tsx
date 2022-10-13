import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({children}: TextInputRootProps) => {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
    {children}
    </div>
  )
}

export interface TextInputIconPros {
  children: ReactNode;
}

const TextInputIcon = ({children}: TextInputIconPros) => {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

const TextInputInput = (props: TextInputInputProps) => {
  return (
      <input className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
      {...props}
      />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
