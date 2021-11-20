import axios from 'axios'
import React, { Component } from 'react'
import Weather from './Weather'
import { Spinner } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
 class API extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             response: '',
             locationValue: '',
             showWeather: false,
        }
    }

    GetWeatherData = async() =>{
        if(this.state.locationValue !=""){
            await axios.get(`http://api.weatherapi.com/v1/current.json?key=6fc55fb79d874414949150940211811&q=${this.state.locationValue}&aqi=no`)
        .then(res=>{
            this.setState({
                response: res.data,
                showWeather:true,
            })
          console.log(this.state.response)  
        })
        .catch(error=>{ this.setState({
            response: 'No data Found',
            showWeather:false,
        })
        console.log(error)
    })
        }


    }

    getValue = (event) =>{
        this.setState({
            locationValue: event.target.value,
        })
    }
    
    render() {
        const styles = ({
            root:{
                color:'black',
                padding:'4px',
                borderRadius: '15px',
                margin: '5px',
            }
        })

        const decide  = () =>{
            if(this.state.response=="No data Found"){
                return(
                    <h1>No data found</h1>
                )
            }
            else {
                return(
                    this.state.showWeather? <Weather response={this.state.response}/> : ""
                )
            }
        }
        return (
            <div>
                <center>
                <input style={styles.root} type="text"  onChange={this.getValue} value={this.state.locationValue} />
                <Button size="sm" type="submit" onClick={this.GetWeatherData}>Click me</Button></center>
                {decide()}
            </div>
        )
    }
}

export default API

