import { createContext, useContext } from 'react';
import Youtube from "../api/yotube";
import FakeYoutubeClient from "../api/fakeYoutubeClient";
import YoutubeClient from "../api/yotubeClient";

export const YoutubeApiContext = createContext();

const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({children}) {
  return <YoutubeApiContext.Provider value={{youtube}}>
    {children}
  </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}