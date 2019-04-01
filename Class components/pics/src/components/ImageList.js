import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({ description, urls, id}) => {
        return (
        <img alt={description} key={id} src={urls.regular} />
        );
    });

    return <div>{images}</div>;
};

export default ImageList;