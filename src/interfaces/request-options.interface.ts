import { RequestErrorResponse } from '../enums';

export type ThrowOnError = { [key in RequestErrorResponse]?: Function };

export interface RequestOptions {
  param?: any;
  query?: [
    {
      propName: string;
      value: string;
    },
  ];
  throw?: ThrowOnError;
}
