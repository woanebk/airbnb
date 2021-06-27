import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

export class index extends Component {
    render() {
        return (<div>
            <h2>Users</h2>
            <Link to="/">Home</Link>
        </div>);
    }
}

export default index
