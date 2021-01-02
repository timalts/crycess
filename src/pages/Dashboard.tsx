import React, { Component } from 'react'
import Table1 from '../components/CoinScroller'
import { componentDidMount } from '../api/api'
import { getCountryByCode } from '../utils/Utils'
import './styles/Dashboard.css'

interface Props{

}
 //               <Table droplets={this.state.droplets} />

interface State{
    droplets : any
}

export default class Dashboard extends Component<Props,State> {
    constructor(props: Props){
        super(props);
        this.state = {
            droplets: []
        }
    }
    componentWillMount() {
        componentDidMount().then(componentDidMount => {
            //getCountryByCode("", componentDidMount)
            this.setState({
                droplets : componentDidMount
            })
        }
        )
    }
    render() {
        console.log('rendering ...')
        console.log(this.state.droplets)
        return (
            <Table1 droplets={this.state.droplets}/>
            )
    }
}

