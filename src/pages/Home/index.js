import React, { Component } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export class index extends Component {
    render() {
        return (<div>
            <h2>Home</h2>
            <Link to="/about">About</Link>
        </div>)
    }
}

export default index


