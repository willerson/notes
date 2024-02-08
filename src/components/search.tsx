import { ChangeEvent } from 'react';

interface SearchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ onChange }: SearchProps) => {
  return (
    <form className="w-full">
      <input
        type="text"
        placeholder="Busque em suas notas..."
        className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500"
        onChange={onChange}
      />
    </form>
  );
};
