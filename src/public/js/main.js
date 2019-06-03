import React from 'react';
import { BrowserRouter,Route, Switch} from "react-router-dom";

import MobileMenu from './mobile-menu';
import Home from '../../home/index';
import NoMatch from '../../404/index';


class Main extends React.Component{
    render(){
        return(
            <div className="body-box">
                <header className="header">
                    <MobileMenu></MobileMenu>
                </header>
                <div className="main-content">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/" component={Home} />
                            <Route component={NoMatch} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default Main