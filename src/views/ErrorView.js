"use strict";

import React from 'react';


export default class ErrorView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message : this.props.error.message
        }
    }


    render() {
        return (
            <div>
                <h1>A Terrible Thing Happened</h1>
            </div>
        );
    }
}