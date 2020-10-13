import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom'
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
    const launchFilter = launch === "true" ? "&launch_success=true" : ""
    const landFilter = land === "true" ? "&land_success=true" : ""
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
      const launchFilter = launch === "true" ? "&launch_success=true" : ""
      const landFilter = land === "true" ? "&land_success=true" : ""
      axios.get(`https://api.spacexdata.com/v3/launches?limit=100${yearFilter}${launchFilter}${landFilter}`)
        .then(res => { this.setState({ flights: res.data }) })

    }
  }

  render() {

    const handleFilter = (filterType, filterValue) => {

      this.setState({ [filterType]: filterValue }, () => {
        const { year, launch, land } = this.state
        const yearFilter = year ? `year=${year}` : ""
        const launchFilter = launch === "true" ? "&launchSuccess=true" : ""
        const landFilter = land === "true" ? "&landSuccess=true" : ""
        window.history.pushState({}, "", `filter?${yearFilter}${launchFilter}${landFilter}`)
      })
    }

    const flights = this.state.flights || []
    return (

      <div className="App">
        <div className="title">SpaceX Launch Programs</div>
        <div className="content">
          <Filters
            handleFilter={handleFilter}
          />
          <Container
            flights={flights}
          />
        </div>
      </div >

    );
  }
}

export default App;
