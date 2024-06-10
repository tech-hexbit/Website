import PropTypes from "prop-types"
import PrCss from "../Css/Lable.module.css"
import ItCss from "../Input/Css/InputType1.module.css"
import Dropdown from "./Dropdown"
import { useEffect, useState } from "react"

const Attributes = ({ setData, showData }) => {
    const [variants, setVariant] = useState({
        gender: "",
        colour: "",
        size: "",
        brand: ""
    });
    const [addedFields, setAddedField] = useState([]);
    const genderOptions = [
        "Male",
        "Female",
        "Other"
    ]
    const colourOptions = [
        "Red",
        "Green",
        "Blue"
    ]
    const sizeOptions = [
        "sm",
        "md",
        "lg",
        "xl"
    ]
    const brandOptions = [
        "Addidas",
        "Nike",
        "Hush Puppies"
    ]
    const mandatoryAttributes = [
        { value: "size_chart", label: "Size Chart" },
        { value: "fabric", label: "Fabric" },
        { value: "strap_material", label: "Strap Material" },
        { value: "water_resistant", label: "Water Resistant" },
        { value: "display", label: "Display" },
        { value: "glass_material", label: "Glass Material" },
        { value: "colour_name", label: "Colour Name" },
        { value: "sport_type", label: "Sport Type" },
        { value: "base_metal", label: "Base Metal" },
        { value: "plating", label: "Plating" }
    ];

    const handleSelectChange = (name, value) => {
        setVariant({ ...variants, [name]: value });
    };

    const handleSelectAdditionalChange = (e) => {
        if (!addedFields.includes(e.target.value)) {
            setAddedField([...addedFields,
            { "label": e.target.selectedOptions[0].getAttribute('name'), "value": e.target.value }
            ]);
            setVariant({ ...variants, [e.target.value]: "" });
        }
    };

    useEffect(() => {
        setData({ ...showData, attribute: variants })
    }, [variants])


    return (
        <>
            <p className={PrCss.AboutYou}>Mandatory Attributes</p>
            {/* Gender */}
            <Dropdown
                fieldName={"Gender"}
                name={"gender"}
                options={genderOptions}
                value={variants.gender}
                onChange={handleSelectChange}
            />
            {/* Colour */}
            <Dropdown
                fieldName="Colour"
                name="colour"
                onChange={handleSelectChange}
                options={colourOptions}
                value={variants.colour}
            />
            {/* Size */}
            <Dropdown
                fieldName="Size"
                name="size"
                onChange={handleSelectChange}
                options={sizeOptions}
                value={variants.size}
            />
            {/* Brand */}
            <Dropdown
                fieldName="Brand"
                name="brand"
                onChange={handleSelectChange}
                options={brandOptions}
                value={variants.brand}
            />


            <div className={ItCss.inpDiv}>
                <p className={ItCss.inputLabel}>Add Mandatory Attributes</p>
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
            </div>

            {addedFields.map((field, index) => (
                <Dropdown
                    fieldName={field.label}
                    name={field.label}
                    key={index}
                    onChange={handleSelectChange}
                    options={["yes", "no"]}
                    value={variants[field.value]}
                />
            ))}
        </>
    )
}

Attributes.propTypes = {
    setData: PropTypes.func.isRequired,
    showData: PropTypes.object.isRequired
};

export default Attributes



