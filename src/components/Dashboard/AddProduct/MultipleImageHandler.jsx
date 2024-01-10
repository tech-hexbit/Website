
import React, { useRef } from 'react';
import style from './Css/MultipleImageHandler.module.css';

const MultipleImageHandler = ({multipleImageUpload,setMultipleImageUpload}) => {

  
  const fileInp = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setMultipleImageUpload((prevImages) => [...prevImages, ...selectedFiles]);
  };

  const handleClick = () => {
    fileInp.current.click();
  };

  return (
    <div>
       <div className={style.addimgDivMain}> 
          <input
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={fileInp}
      />
      {multipleImageUpload.map((image, index) => (
        <img
          key={index}
          src={URL.createObjectURL(image)}
          alt=""
          style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }}
        />
         
      ))}
      <div className={style.addImgDiv} onClick={handleClick}>
              <div>
                <p>+</p>
              </div>
            </div>
    </div>
    </div>
  );
};

export default MultipleImageHandler;
