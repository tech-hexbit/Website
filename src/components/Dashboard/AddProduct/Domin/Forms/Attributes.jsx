import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import PrCss from "../Css/Lable.module.css"
import ItCss from "../Input/Css/InputType1.module.css"
import Dropdown from "./Dropdown"
import optionsData from "../Json/optionsData.json"
import sizeData from "../Json/b.json"
// import UrlInput from "./UrlInput"

const Attributes = ({ setData, showData }) => {
    const [variants, setVariant] = useState({
        gender: "",
        colour: "",
        size: "",
        sizeChart: "",
        fabric: "",
        strapMaterial: "",
        waterResistant: "",
        display: "",
        glassMaterial: "",
        colourName: "",
        sportType: "",
        baseMetal: "",
        plating: ""
    });

    // const [addedFields, setAddedField] = useState([]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVariant((prevVariants) => ({
            ...prevVariants,
            [name]: value,
        }));
    };

    const handleSelectChange = (name, value) => {
        setVariant({ ...variants, [name]: value });
    };

    // const handleSelectAdditionalChange = (e) => {
    //     if (!addedFields.includes(e.target.value)) {
    //         setAddedField([...addedFields,
    //         { "label": e.target.selectedOptions[0].getAttribute('name'), "value": e.target.value }
    //         ]);
    //         setVariant({ ...variants, [e.target.value]: "" });
    //     }
    // };

    useEffect(() => {
        setData({ ...showData, variants: variants })
    }, [variants])

    useEffect(() => {
        console.log(variants);
    }, [variants])

    return (
        <>
            <p className={PrCss.AboutYou}>Mandatory Attributes</p>
            {showData.category_id && optionsData.categories[showData.category_id][0].includes("gender") ?
                (

                    <Dropdown
                        fieldName={"Gender"}
                        name={"gender"}
                        options={["men", "women", "kids", "unisex"]}
                        value={variants.gender}
                        onChange={handleSelectChange}
                    />
                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("colour") ?
                (
                    <div className={ItCss.inpDiv}>
                        <p className={ItCss.inputLabel}>Colour</p>
                        <input
                            type="color"
                            name="colour"
                            value={variants.colour}
                            onChange={handleInputChange}
                        />
                    </div>
                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("sizeChart") ?
                (
                    <div className={ItCss.inpDiv}>
                        <p className={ItCss.inputLabel}>Size Chart</p>
                        <input
                            type="url"
                            name="sizeChart"
                            value={variants.sizeChart}
                            placeholder={"Enter Size Chart"}
                            onChange={handleInputChange}
                        />
                    </div>
                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("fabric") ?
                (
                    <Dropdown
                        fieldName="Fabric"
                        name="fabric"
                        onChange={handleSelectChange}
                        options={optionsData.fabric}
                        value={variants.fabric}
                    />
                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("strapMaterial") ?
                (

                    <Dropdown
                        fieldName="Strap Material"
                        name="strapMaterial"
                        onChange={handleSelectChange}
                        options={optionsData.strap_material}
                        value={variants.strapMaterial}
                    />

                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("waterResistant") ?
                (
                    <Dropdown
                        fieldName="Water Resistant"
                        name="waterResistant"
                        onChange={handleSelectChange}
                        options={["y", "n"]}
                        value={variants.waterResistant}
                    />
                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("display") ?
                (

                    <Dropdown
                        fieldName="Display"
                        name="display"
                        onChange={handleSelectChange}
                        options={optionsData.display}
                        value={variants.display}
                    />
                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("glassMaterial") ?
                (

                    <Dropdown
                        fieldName="Glass Material"
                        name="glassMaterial"
                        onChange={handleSelectChange}
                        options={optionsData.glass_material}
                        value={variants.glassMaterial}
                    />
                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("sportType") ?
                (

                    <Dropdown
                        fieldName="Sport Type"
                        name="sportType"
                        onChange={handleSelectChange}
                        options={optionsData.sport_type}
                        value={variants.sportType}
                    />
                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("baseMetal") ?
                (
                    <Dropdown
                        fieldName="Base Metal"
                        name="baseMetal"
                        onChange={handleSelectChange}
                        options={optionsData.base_metal}
                        value={variants.baseMetal}
                    />
                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("plating") ?
                (

                    <Dropdown
                        fieldName="Plating"
                        name="plating"
                        onChange={handleSelectChange}
                        options={optionsData.plating}
                        value={variants.plating}
                    />
                )
                :
                ""
            }

            {showData.category_id && optionsData.categories[showData.category_id][0].includes("size") ?
                (
                    <Dropdown
                        fieldName="Size"
                        name="size"
                        onChange={handleSelectChange}
                        options={sizeData?.[0]?.[variants.gender]?.[showData.category_id] ?? []}
                        value={variants.size}
                    />
                )
                :
                ""
            }

            {/* <div className={ItCss.inpDiv}>
                <p className={ItCss.inputLabel}>Add Optional Attributes</p>
                <select
                    className={ItCss.inp}
                    onChange={handleSelectAdditionalChange}
                >
                    <option value="Selected" selected hidden>
                        Select
                    </option>
                    {mandatoryAttributes.map((option, index) => (
                        <option key={index} value={option.value} name={option.label}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div> */}

            {/* {addedFields.map((field, index) => (
                <Dropdown
                    fieldName={field.label}
                    name={field.label}
                    key={index}
                    onChange={handleSelectChange}
                    options={["yes", "no"]}
                    value={variants[field.value]}
                />
            ))} */}
        </>
    )
}

Attributes.propTypes = {
    setData: PropTypes.func.isRequired,
    showData: PropTypes.object.isRequired
};

export default Attributes



