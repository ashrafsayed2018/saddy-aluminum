import React from 'react'

const Gallery = ({ images }) => {
    return (
      <div id='gallery'>
          <h1 className='font-bold text-xl lg:text-4xl text-white text-center my-8'>معرض اعمالنا</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => {
            console.log(image.src);
            return (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className="block w-full h-full object-cover"
                />
              )
        })}
      </div>
      </div>
    );
  };
  
  export default Gallery;