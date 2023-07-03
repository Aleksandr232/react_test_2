import React, { useState } from "react";
import ContentRight from "../content_right/content_right";
import content from './left_content.png'
import girl from './girl.png'
import girls from './girls.png'
import girl_end from './girl_end.png'
import './content.css'


const ImageListComponent = ({ images, onImageClick }) => {
  return (
    <div className="img_contents">
      {images.map((image) => (
        <img className="img_content"
          key={image.id}
          src={image.url}
          alt={image.alt}
          onClick={() => onImageClick(image.url)}
        />
      ))}
    </div>
  );
};

const SelectedImage = ({ selectedImage }) => {
  return (
    <div>
      {selectedImage && <img style={{width: '100%'}} src={selectedImage} alt="Selected Image" />}
    </div>
  );
};

const ParentComponent = () => {
  const [selectedImage, setSelectedImage] = useState(content);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const images = [
    { id: 1, url:content, alt: "Image 1" },
    { id: 2, url:girl, alt: "Image 2" },
    { id: 3, url:girls, alt: "Image 3" },
    { id: 4, url:girl_end, alt: "Image 4" },
  ];

  return (
    <div className="content">
    <div className='left_content'>
      <ImageListComponent
        images={images}
        onImageClick={handleImageClick}
      />
      <SelectedImage selectedImage={selectedImage} />
    </div>
    <ContentRight/>
    </div>
  );
};

export default ParentComponent;