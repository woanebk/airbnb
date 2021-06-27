import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export class index extends Component {
    render() {
        return (<div>
            <h2>About</h2>
            <Link to="/users">Users</Link>
        </div>)
    }
}

export default index
