import React from 'react'
// import {useState} from 'react'
import Button from './Button'
import './../styles/Filters.css'


const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
const toggleBtns = [{ value: true, checked: false }, { value: false, checked: false }]

const objectMapper = (item, compare) => {
    if (item.toString() === compare) {
        return { value: item, checked: true }
    }
    else {
        return { value: item, checked: false }
    }
}
const objectMapperForToggle = (item, compare) => {
    if (item.value.toString() === compare) {
        return { ...item, checked: true }
    }
    else {
        return { ...item, checked: false }
    }
}

class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    static getDerivedStateFromProps(props, state) {
        const { year, land, launch } = props
        const yearObjArr = years.map(item => objectMapper(item, year))
        const landBtns = toggleBtns.map(item => objectMapperForToggle(item, land))
        const launchBtns = toggleBtns.map(item => objectMapperForToggle(item, launch))
        return { yearObjArr, landBtns, launchBtns }
    }

    render() {

        const btnCreator = (arr, setValue, urlDesignator) => {
            return arr.map(obj => <Button
                key={obj.value.toString()}
                btnText={obj.value.toString()}
                checked={obj.checked}
                setValue={setValue}
                {...this.props}
                urlDesignator={urlDesignator}
            />)
        }

        const { yearObjArr, landBtns, launchBtns } = this.state
        const { handleFilter } = this.props
        return (
            <div className="Filters" >
                <div className="filters-title">Filters</div>
                <div className="year">Launch Year</div>
                <div className="controls">
                    {btnCreator(yearObjArr, handleFilter, 'year')}
                </div>
                <div className="launch">Successful Launch</div>
                <div className="controls">
                    {btnCreator(launchBtns, handleFilter, 'launch')}
                </div>
                <div className="landing">Successful Landing</div>
                <div className="controls">
                    {btnCreator(landBtns, handleFilter, 'land')}
                </div>
            </div>
        )
    }
}

export default Filters
