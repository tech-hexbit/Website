import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

//component
import TxtArea from "../Input/TxtArea";

// css
import FCss from "../Css/Form.module.css";
import PrCss from "../Css/Lable.module.css";
import ItCss from "../Input/Css/InputType1.module.css";

export default function ProductCategory({ setData, showData }) {
  const [tags, settags] = useState([]);
  const [tagvalue, settagvalue] = useState("");

  const handleSelectChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const addtags = (e) => {
    if ((e.keyCode === 13 && tagvalue) || (e.keyCode === 188 && tagvalue)) {
      settags([...tags, tagvalue]);
      settagvalue("");
    }
  };

  const deletetag = (val) => {
    let remaintags = tags.filter((t) => t != val);
    settags(remaintags);
  };

  useEffect(() => {
    setData({
      ...showData,
      tags,
    });
    console.log(tags);
  }, [tags]);

  return (
    <>
      <p className={PrCss.AboutYou}>Publish Info</p>

      {/* Category */}
      <div className={ItCss.inpDiv}>
        <p className={ItCss.inputLabel}>Category</p>

        <select
          name="category_id"
          id=""
          className={ItCss.inp}
          onChange={handleSelectChange}
        >
          <option value="Selected" selected disabled hidden>
            Select
          </option>
          <option value="Shirts">Shirts</option>
          <option value="T Shirts">T Shirts</option>
          <option value="Sweatshirts">Sweatshirts</option>
          <option value="Kurtas & Kurta Sets">Kurtas & Kurta Sets</option>
          <option value="Jackets & Coats">Jackets & Coats</option>
          <option value="Sweaters">Sweaters</option>
          <option value="Suits">Suits</option>
          <option value="Sherwanis">Sherwanis</option>
          <option value="Track Shirts">Track Shirts</option>
          <option value="Track Suits">Track Suits</option>
          <option value="Unstitched Fabrics">Unstitched Fabrics</option>
          <option value="Dresses">Dresses</option>
          <option value="Tops">Tops</option>
          <option value="Trousers">Trousers</option>
          <option value="Capris">Capris</option>
          <option value="Coordinates">Coordinates</option>
          <option value="Playsuits">Playsuits</option>
          <option value="Jumpsuits">Jumpsuits</option>
          <option value="Shrugs & Blouses">Shrugs & Blouses</option>
          <option value="Blazers & Waistcoats">Blazers & Waistcoats</option>
          <option value="Tights, Leggings & Jeggings">Tights, Leggings & Jeggings</option>
          <option value="Track Pants">Track Pants</option>
          <option value="Jeans">Jeans</option>
          <option value="Shorts">Shorts</option>
          <option value="Joggers">Joggers</option>
          <option value="Dhotis & Dhoti Pants">Dhotis & Dhoti Pants</option>
          <option value="Churidars">Churidars</option>
          <option value="Salwars">Salwars</option>
          <option value="Dungarees & Jumpsuits">Dungarees & Jumpsuits</option>
          <option value="Skirts">Skirts</option>
          <option value="Clothing Sets">Clothing Sets</option>
          <option value="Belts">Belts</option>
          <option value="Caps & Hats">Caps & Hats</option>
          <option value="Kurtis, Tunics">Kurtis, Tunics</option>
          <option value="Sarees">Sarees</option>
          <option value="Ethnic Wear">Ethnic Wear</option>
          <option value="Palazzos">Palazzos</option>
          <option value="Dress Materials">Dress Materials</option>
          <option value="Lehenga Cholis">Lehenga Cholis</option>
          <option value="Dupattas & Shawls">Dupattas & Shawls</option>
          <option value="Burqas & Hijabs">Burqas & Hijabs</option>
          <option value="Blouses">Blouses</option>
          <option value="Blouse Pieces">Blouse Pieces</option>
          <option value="Briefs">Briefs</option>
          <option value="Boxers">Boxers</option>
          <option value="Vests">Vests</option>
          <option value="Robes">Robes</option>
          <option value="Night Suits">Night Suits</option>
          <option value="Thermal Wear">Thermal Wear</option>
          <option value="Swim Bottoms">Swim Bottoms</option>
          <option value="Swimwear">Swimwear</option>
          <option value="Bra">Bra</option>
          <option value="Shapewear">Shapewear</option>
          <option value="Sleepwear & Loungewear">Sleepwear & Loungewear</option>
          <option value="Camisoles">Camisoles</option>
          <option value="Lingerie Sets & Accessories">Lingerie Sets & Accessories</option>
          <option value="Bath Robes">Bath Robes</option>
          <option value="Towels">Towels</option>
          <option value="Pyjamas">Pyjamas</option>
          <option value="Party Wear">Party Wear</option>
          <option value="Innerwear & Sleepwear">Innerwear & Sleepwear</option>
          <option value="Nightwear & Loungewear">Nightwear & Loungewear</option>
          <option value="Watches">Watches</option>
          <option value="Gloves">Gloves</option>
          <option value="Socks">Socks</option>
          <option value="Stockings">Stockings</option>
          <option value="Laces">Laces</option>
          <option value="Soles & Charms">Soles & Charms</option>
          <option value="Shoe Racks & Organisers">Shoe Racks & Organisers</option>
          <option value="Shoe Care - Accessories">Shoe Care - Accessories</option>
          <option value="Flip-Flops & Flats">Flip-Flops & Flats</option>
          <option value="Sandals & Floaters">Sandals & Floaters</option>
          <option value="Backpacks">Backpacks</option>
          <option value="Handbags">Handbags</option>
          <option value="Trolley, Luggage & Suitcases">Trolley, Luggage & Suitcases</option>
          <option value="Formal Shoes">Formal Shoes</option>
          <option value="Casual Shoes">Casual Shoes</option>
          <option value="Sports Shoes">Sports Shoes</option>
          <option value="Outdoor Shoes">Outdoor Shoes</option>
          <option value="Work & Safety Shoes">Work & Safety Shoes</option>
          <option value="Ethnic Shoes">Ethnic Shoes</option>
          <option value="Boots">Boots</option>
          <option value="Heels">Heels</option>
          <option value="Contact Lenses">Contact Lenses</option>
          <option value="Eye Glasses">Eye Glasses</option>
          <option value="Eye Glass Frames">Eye Glass Frames</option>
          <option value="Sunglasses">Sunglasses</option>
          <option value="Contact Lens Cases">Contact Lens Cases</option>
          <option value="Contact Lens Solutions">Contact Lens Solutions</option>
          <option value="Contact Lens Tweezers">Contact Lens Tweezers</option>
          <option value="Eyeglasses Pouches & Cases">Eyeglasses Pouches & Cases</option>
          <option value="Microfiber Wipes">Microfiber Wipes</option>
          <option value="Eyewear Slings">Eyewear Slings</option>
          <option value="Bracelets">Bracelets</option>
          <option value="Chains">Chains</option>
          <option value="Mangalsutra">Mangalsutra</option>
          <option value="Anklets">Anklets</option>
          <option value="Bangles & Bracelets">Bangles & Bracelets</option>
          <option value="Necklaces">Necklaces</option>
          <option value="Earrings">Earrings</option>
          <option value="Jewellery Sets">Jewellery Sets</option>
          <option value="Nosepins & Noserings">Nosepins & Noserings</option>
          <option value="Pendants">Pendants</option>
          <option value="Rings">Rings</option>
          <option value="Toe Rings">Toe Rings</option>
          <option value="Gold Coins">Gold Coins</option>
          <option value="Brooch">Brooch</option>
        </select>


      </div>

      {/* Tags */}
      <div className={FCss.inpDiv}>
        <p className={FCss.label}>Tags</p>

        <div className={FCss.inpTag}>
          {tags.map((tag, index) => (
            <div key={index} className={FCss.TagP}>
              <p>{tag}</p>{" "}
              <p onClick={() => deletetag(tag)} className={FCss.CloseX}>
                X
              </p>
            </div>
          ))}
          <div className={FCss.inputt}>
            <input
              value={tagvalue}
              type="text"
              placeholder="Press Enter to input"
              onChange={(e) => settagvalue(e.target.value)}
              onKeyDown={addtags}
            />
          </div>
        </div>
      </div>

      {/* Additives Info */}
      <TxtArea
        Label="Additional Info"
        showData={showData}
        setData={setData}
        field="additives_info"
        placeholder="Materials, Fabrics, Washing Instructions, etc"
      />
    </>
  );
}

ProductCategory.propTypes = {
  showData: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};
