'use client';
import React, { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

interface Option {
  key: string;
  label: string;
}

interface Props {
  value: string | undefined;
  options: Option[];
  queryParam: string;
  label: string;
}

export default function Dropdown({ value, options, queryParam, label }: Props) {
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    const currentQueryParams = new URLSearchParams(window.location.search);
    if (newValue) {
      currentQueryParams.set(queryParam, encodeURIComponent(newValue));
    } else {
      currentQueryParams.delete(queryParam);
    }
    router.push(`/?${currentQueryParams.toString()}`);
  };

  return (
    <div>
      <label htmlFor={queryParam} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <select
        id={queryParam}
        value={value}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {options?.map(({ key, label }) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
