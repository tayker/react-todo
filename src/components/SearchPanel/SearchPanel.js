import React, { Component } from 'react';


import './SearchPanel.css';
export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term })
        this.props.onSearchChange(term);
    };

    render() {
        const searchText = 'Type here to search';
        const searchStyle = {
            fontSize: '30px',
            marginRight: '20px',
            padding: '10px'
        };
        return (
            <input 
            placeholder={ searchText }
            style={ searchStyle }
            onChange={ this.onSearchChange }
            value={ this.state.term } />
        )
    }
};