import React, { Component } from 'react'

import axios from 'axios'
import './styles/App.css'
import Container from './components/Container'
import Filters from './components/Filters'


class App extends Component {
  constructor(props) {
    super(props)
    let initialData
    if (props.initialData) {
      initialData = props.initialData
    }
    else {
      initialData = window.__initial_data
      delete window.__initial_data
    }
    this.state = initialData || {}
  }


  componentDidMount() {
    const { year, launch, land } = this.state
    const yearFilter = year ? `&launch_year=${year}` : ""
    const launchFilter = launch ? `&launch_success=${launch}` : ""
    const landFilter = land ? `&land_success=${land}` : ""
    axios.get(`https://api.spacexdata.com/v3/launches?limit=100${yearFilter}${launchFilter}${landFilter}`)
      .then(res => {
        this.setState({ flights: res.data })
      })
  }

  UNSAFE_componentWillUpdate(prevProps, prevState) {
    const { year, launch, land } = prevState

    if (year !== this.state.year
      || launch !== this.state.launch
      || land !== this.state.land) {

      const yearFilter = year ? `&launch_year=${year}` : ""
      const launchFilter = launch ? `&launch_success=${launch}` : ""
      const landFilter = land ? `&land_success=${land}` : ""
      axios.get(`https://api.spacexdata.com/v3/launches?limit=100${yearFilter}${launchFilter}${landFilter}`)
        .then(res => { this.setState({ flights: res.data }) })

    }
  }

  render() {

    const handleFilter = (filterType, filterValue) => {

      this.setState({ [filterType]: filterValue }, () => {
        const { year, launch, land } = this.state
        const yearFilter = year ? `launch_year=${year}` : ""
        const launchFilter = launch ? `launch_success=${launch}` : ""
        const landFilter = land ? `land_success=${land}` : ""
        this.props.history.push(`filter?${yearFilter}${year && launch ? "&" : ""}${launchFilter}${(year || launch) && land ? "&" : ""}${landFilter}`)

      })
    }

    const flights = this.state.flights || []
    return (

      <div className="App">
        <div className="title">SpaceX Launch Programs</div>
        <div className="content" tabIndex={2}>
          <Filters
            handleFilter={handleFilter}
            year={this.state.year}
            land={this.state.land}
            launch={this.state.launch}
          />
          <div className="information" tabIndex={1}>
            <Container
              flights={flights}
              land={this.state.land}
            />
            <div className="developer">
              Developed By: <span>{"Rishab Gupta"}</span>
            </div>
          </div>

        </div>

      </div >

    );
  }
}

export default App;
