import { FETCH_EVENT_VALUES } from "./types";



export const incrementFunction = (data) => ({
  type: FETCH_EVENT_VALUES,
  payload: data,
});
