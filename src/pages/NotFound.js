import React from 'react';
import gif from '../assets/wtfcat.gif';

const NotFoundPage = () => {
  return (
    <>
        <img
            src={gif}
            alt="Gif not found"
            className="wtf-cat"
        />
        <h3 className="notfoundtext">Page not found, no single cats in this neighborhood!</h3>
    </>
  )
}

export default NotFoundPage;