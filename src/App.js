"use strict";

import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ListView    from './views/ListView';
import ItemView    from './views/ItemView';
import ErrorView   from './views/ErrorView';

import Header from './components/Header';
import Footer from './components/Footer';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Master/Detail Example in React',
            routes: [
                { component: ListView , path: '/', exact: true },
                { component: ItemView , path: '/:id'},
                { component: ErrorView }
            ]
        };

    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return(
             <div>
                 <Header title={this.state.title} />
                 <hr/>
                 <Switch>
                    {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                 </Switch>
                 <hr/>
                 <Footer />
             </div>
        );
    }
}

