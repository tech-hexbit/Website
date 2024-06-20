import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import PrCss from "../Css/Lable.module.css"
import ItCss from "../Input/Css/InputType1.module.css"
import Dropdown from "./Dropdown"
import optionsData from "../Json/optionsData.json"
import sizeData from "../Json/b.json"
// import UrlInput from "./UrlInput"

const Attributes = ({ setData, showData }) => {
    const [attribute, setAttribute] = useState({
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
        setAttribute((prevAttribute) => ({
            ...prevAttribute,
            [name]: value,
        }));
    };

    const handleSelectChange = (name, value) => {
        setAttribute({ ...attribute, [name]: value });
    };

    // const handleSelectAdditionalChange = (e) => {
    //     if (!addedFields.includes(e.target.value)) {
    //         setAddedField([...addedFields,
    //         { "label": e.target.selectedOptions[0].getAttribute('name'), "value": e.target.value }
    //         ]);
    //         setAttribute({ ...attribute, [e.target.value]: "" });
    //     }
    // };

    useEffect(() => {
        setData({ ...showData, attribute: attribute })
    }, [attribute])

    // useEffect(() => {
    //     console.log(Object.keys(optionsData.categories[showData.category_id][0]).length)
    // },[] )

    return (
        <>
            {showData.category_id &&
                optionsData.categories &&
                optionsData.categories[showData.category_id] &&
                optionsData.categories[showData.category_id][0] &&
                Object.keys(optionsData.categories[showData.category_id][0]).length > 0 ? (
                <p className={PrCss.AboutYou}>Mandatory Attributes</p>
            ) : ""}
            {showData.category_id && optionsData.categories[showData.category_id][0].includes("gender") ?
                (

                    <Dropdown
                        fieldName={"Gender"}
                        name={"gender"}
                        options={["men", "women", "kids", "unisex"]}
                        value={attribute.gender}
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
                            value={attribute.colour}
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
                            value={attribute.sizeChart}
                            placeholder={"Enter Size Chart"}
                            onChange={handleInputChange}
                        />
                    </div>
                )
                :
                ""
            }

            {showData.category_id && optionsData && optionsData.categories[showData.category_id][0].includes("fabric") ?
                (
                    <Dropdown
                        fieldName="Fabric"
                        name="fabric"
                        onChange={handleSelectChange}
                        options={optionsData.fabric}
                        value={attribute.fabric}
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
                        value={attribute.strapMaterial}
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
                        value={attribute.waterResistant}
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
                        value={attribute.display}
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
                        value={attribute.glassMaterial}
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
                        value={attribute.sportType}
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
                        value={attribute.baseMetal}
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
                        value={attribute.plating}
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
                        options={
                            attribute.gender == ""
                                ? ["please enter gender"]
                                : (sizeData?.[0]?.[attribute?.gender]?.[showData.category_id] ?? [])
                        }
                        value={attribute.size}
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
                    value={attribute[field.value]}
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



