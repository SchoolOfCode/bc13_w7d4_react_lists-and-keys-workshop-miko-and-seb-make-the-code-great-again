import React from "react";

import "./index.css";

function Post(samplePost) {
  return (
    <article className="article">
      <img src={samplePost.img} alt={samplePost.alt}/>
      <h2>{samplePost.title}</h2>
      <h3>{samplePost.author}</h3>
      <p>{samplePost.date}</p>
      <p className="text">{samplePost.text}</p>
      <p>{samplePost.highlights}</p>
    </article>
  );
}

export default Post;
