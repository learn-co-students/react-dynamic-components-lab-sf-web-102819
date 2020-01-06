import React, { Component } from 'react';

export default class comment extends React.Component{

    render () {
        return (
        <div className= "comment">{this.props.commentText}</div>
            
        ) 
    }
}

