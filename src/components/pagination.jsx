import React from 'react'

const Pagination = ({ postsPerPage, total, paginate }) => {
  let numbers = [];
  for (let i = 1; i <= Math.ceil(total / postsPerPage); i++) {
    numbers.push(i);
  }

  return (
    <ul>
      <li>
        {numbers.map((number) => {
          return (
            <a onClick={() => paginate(number)} href="!#" key={number}>
              {number}
            </a>
          );
        })}
      </li>
    </ul>
  );
};

export default Pagination