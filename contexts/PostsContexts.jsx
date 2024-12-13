import { createContext, useContext, useState, useEffect } from "react";

const PostsContext = createContext();

const serverHosting = import.meta.env.VITE_SERVER_HOSTING;

export const PostsContextProvider = ({ children }) => {
  // eseguo la fetch
  const [posts, setPosts] = useState([]);

  const postsFetch = () => {
    fetch(serverHosting)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data[1]);
      });
  };
  useEffect(() => {
    postsFetch();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, postsFetch }}>
      {children}
    </PostsContext.Provider>
  );
};

export const PostsContent = () => {
  return useContext(PostsContext);
};
