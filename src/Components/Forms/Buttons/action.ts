import type {
  BlankTemplate,
  UseTemplate,
  UpdateTemplate,
  DeleteTemplate,
} from "./type";

//return said inkID from JSON file
export function blanktemplate(): BlankTemplate {
  return {};
}
export function usetemplate(inkID: string): UseTemplate {
  return { inkID };
}
export function updatetemplate(inkID: string): UpdateTemplate {
  return { inkID };
}
export function deletetemplate(inkID: string): DeleteTemplate {
  return { inkID };
}
