import type { Moment } from 'moment';

export const getSlicedString = (str: string, countChars: number) => {
  return str.length > countChars ? `${str.slice(0, countChars)}…` : str
}

export const isNotEmpty = (fields: Array<Moment | null | string>) => {
  return fields.every((field) => (typeof field === 'string') ? field.length > 0 : field !== null);
}