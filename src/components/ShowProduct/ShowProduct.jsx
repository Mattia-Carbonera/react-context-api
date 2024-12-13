const serverHosting = import.meta.env.VITE_SERVER_HOSTING;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowProduct() {
  const { id } = useParams();

  //   eseguo la chiamata e filtro il post
  const [selectedPost, setSelectedPost] = useState({});
  const singlePostFetch = () => {
    fetch(serverHosting).then((res) =>
      res.json().then((data) => {
        const postsArray = data[1];
        const postFiltered = postsArray.find((post) => post.id == id);
        setSelectedPost(postFiltered);
      })
    );
  };

  useEffect(() => {
    singlePostFetch();
  }, []);

  //   console.log(selectedPost);

  const { title, content, image, tags } = selectedPost;

  console.log(tags);

  return (
    <div className="container">
      <div className="selected-item">
        <h2>Hai selezionato il post umero {id}</h2>
        <div className="selected-item-content">
          <img src={image} alt="" />
          <h2>{title}</h2>
          <p>{content}</p>
          <span>{tags}</span>
        </div>
      </div>
    </div>
  );
}
