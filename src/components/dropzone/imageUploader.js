import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ imagefixed, onImageChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const preview = URL.createObjectURL(file);

    setSelectedImage({
      file,
      preview,
    });

    // Pass the selectedImage to the parent component
    onImageChange({
      file,
      preview,
    });

    // Log the URL to the console
    console.log('Dropped image URL:', acceptedFiles);
  }, [onImageChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: '*' });

  return (
    <>
      <div
        {...getRootProps()}
        className="image-input-container"
        style={{
          backgroundAttachment: imagefixed ? 'fixed' : 'scroll',
          backgroundImage: `url('${selectedImage ? selectedImage.preview : ''}')`,
        }}
      >
        <input {...getInputProps()} />
        {!selectedImage && (
          <p>Drag 'n' drop an image here, or click to select one</p>
        )}
      </div>
    </>
  );
};

export default ImageUploader;
