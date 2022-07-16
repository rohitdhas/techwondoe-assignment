/* eslint-disable no-undef */
import { createClient } from 'contentful';

export function useClient() {
  const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  });

  return { client };
}
