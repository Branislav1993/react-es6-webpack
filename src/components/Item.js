/**
 * Created by adrian on 04.10.17.
 */

"use strict";

import React from 'react';


export default class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        };

    }


    render() {
        return (
            <div>
                {this.state.data.name} |  {this.state.data.url}
                <hr />
                {this.state.data.description}
            </div>
        );
    }
}