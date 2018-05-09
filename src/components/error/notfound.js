import React, { Component } from 'react';
import './notfound.less'
export default class NotFound extends React.Component {
    render() {
        return (
            <a href="/" className="notfound">
                <img src={require('./notfound.jpg')} />
            </a>
        );
    }
}