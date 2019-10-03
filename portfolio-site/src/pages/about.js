import React, {Component} from 'react';
import Header from '../components/header';
import SEO from "../components/seo"


export default class About extends Component {
    render () {
        return (
            <>
            <SEO title="About me" />

            <Header/>
            
            <h1>About me</h1>
            </>
        )
    }
};