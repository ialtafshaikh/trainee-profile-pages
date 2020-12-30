import React, { Component } from 'react'
import CardList from "../components/CardList"

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <CardList />
            </div>
        )
    }
}
