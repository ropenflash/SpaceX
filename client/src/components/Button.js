import React from 'react'
import '../../src/styles/button.css'


const blockName = "Button"
function Button(props) {

    const { btnText, setValue, checked, urlDesignator } = props


    const handleClick = (e, btnText) => {
        e.preventDefault()
        // objSetter(newArr)
        setValue(urlDesignator, btnText)

    }

    const btnActive = checked ? "-active" : ""
    return (
        <a className={`${blockName}${btnActive}`}
            onClick={(e) => { handleClick(e, btnText) }}
            href={`/${btnText}`}
        >
            { btnText}
        </a >
    )
}

export default Button
