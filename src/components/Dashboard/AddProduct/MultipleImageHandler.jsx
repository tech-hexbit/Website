import React, { useRef } from 'react';
import PropTypes from 'prop-types';

//Css
import MulImgCss from './Css/MultipleImageHandler.module.css';

const MultipleImageHandler = ({multipleImageUpload, setMultipleImageUpload}) => {
  const fileInp = useRef(null);

  // Functions to handle change
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setMultipleImageUpload((prevImages) => [...prevImages, ...selectedFiles]);
  };

  const handleClick = () => {
    fileInp.current.click();
  };

  const handleDeselectImage = (index) => {
    const filteredImages = props.multipleImageUpload.filter((_, i) => i !== index);
    setMultipleImageUpload(filteredImages);
  };

  return (
    <>
      <div className={MulImgCss.inpDiv}>
        <p className={MulImgCss.label}>Product image</p>
        <p className={MulImgCss.labelDes}>Add the product main image</p>
        <div className={MulImgCss.addimgDivMain}>
          <input
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={handleFileChange}
            ref={fileInp}
          />
          {multipleImageUpload.map((image, index) => (
            <div key={index} className={MulImgCss.imageContainer}>
              <img
                src={URL.createObjectURL(image)}
                alt=""
                MulImgCss={{ maxWidth: '150px', maxHeight: '100px', margin: '5px', position: 'relative' }}
              />
              <div className={MulImgCss.closeButton}>
                <button onClick={() => handleDeselectImage(index)}>&#x2715;</button>
              </div>
            </div>
          ))}
          <div className={MulImgCss.addImgDiv} onClick={handleClick}>
            <div>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MultipleImageHandler.propTypes = {
  multipleImageUpload: PropTypes.array.isRequired,
  setMultipleImageUpload: PropTypes.func.isRequired,
};

export default MultipleImageHandler;
