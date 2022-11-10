import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <main id="main">
      {samplePosts.map((samplePost) => {
        return (
          <Post key={samplePost.postId}
                title={samplePost.title} 
                author={samplePost.author} 
                date={samplePost.date} 
                text={samplePost.text} 
                highlights={samplePost.highlights}
                img={samplePost.image.link}
                alt={samplePost.image.alt} />
        );
      })}
      
    </main>
  );
}

export default Main;
