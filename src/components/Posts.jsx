import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  } else {
    return (
      <ul>
        {posts.map((item) => {
          return (
            <li style={{listStyle: 'none', borderRadius: '1px solid black'}} key={item.id}>

              <h3>Post {item.id} - {item.title.toUpperCase()}</h3>
              <p>{item.body}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Posts;
