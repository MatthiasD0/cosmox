import { z } from 'zod';

export const isString = (args: unknown): args is string => {
  return z.string().safeParse(args).success;
};

export const isBoolean = (args: unknown): args is boolean => {
  return z.boolean().safeParse(args).success;
};

export const isNumber = (args: unknown): args is Number => {
  return z.number().safeParse(args).success;
};

export const isDate = (args: unknown): args is Date => {
  return z.date().safeParse(args).success;
};

export const isUndefined = (args: unknown): args is undefined => {
  return args === undefined || typeof args === 'undefined';
};

export const isNull = (args: unknown): args is null => {
  return args === null;
};

export const isObject = (args: unknown): args is Record<string, unknown> => {
  return z.object({}).safeParse(args).success;
};

export const objectIsEmpty = (args: Record<string, unknown>): boolean => {
  return Object.keys(args).length === 0;
};
