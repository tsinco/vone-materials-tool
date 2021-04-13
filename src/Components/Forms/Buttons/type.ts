//fetch inkID from JSON
//name of ink

export type BlankTemplate = {};

export type UseTemplate = {
  inkID: string;
};
export type UpdateTemplate = {
  inkID: string;
};
export type DeleteTemplate = {
  inkID: string;
};
export type DatabaseInfo = {
  version: string;
  url?: string;
  eTag: string;
};
