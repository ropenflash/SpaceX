import React from 'react'
// import {useState} from 'react'
import Button from './Button'
import './../styles/Filters.css'


const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            yearObjArr: years.map(year => ({ value: year, checked: false })),
            landBtns: [{ value: true, checked: false }, { value: false, checked: false }],
            launchBtns: [{ value: true, checked: false }, { value: false, checked: false }]
        }
    }



    render() {

        const btnCreator = (arr, setValue, objSetter, urlDesignator) => {
            return arr.map(obj => <Button
                key={obj.value.toString()}
                btnText={obj.value.toString()}
                checked={obj.checked}
                setValue={setValue}
                arr={arr}
                {...this.props}
                urlDesignator={urlDesignator}
                objSetter={objSetter} />)
        }


        const handleYearObjArr = (yearObjArr) => {
            this.setState({ yearObjArr: yearObjArr })
        }

        const handleLaunchBtns = (launchBtns) => {
            this.setState({ launchBtns: launchBtns })
        }
        const handleLandBtns = (landBtns) => {
            this.setState({ landBtns: landBtns })
        }

        const { yearObjArr, landBtns, launchBtns } = this.state
        const { handleFilter } = this.props
        return (
            <div className="Filters" >
                <div className="filters-title">Filters</div>
                <div className="year">Launch Year</div>
                <div className="controls">
                    {btnCreator(yearObjArr, handleFilter, handleYearObjArr, 'year')}
                </div>
                <div className="launch">Successful Launch</div>
                <div className="controls">
                    {btnCreator(launchBtns, handleFilter, handleLaunchBtns, 'launch')}
                </div>
                <div className="landing">Successful Landing</div>
                <div className="controls">
                    {btnCreator(landBtns, handleFilter, handleLandBtns, 'land')}
                </div>
            </div>
        )
    }
}

export default Filters
