import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import NoMatch from "../routes/NoMatch";
import BusFinder from "../routes/BusFinder";
import Suggestion from "../routes/Suggestion";
import BusFindByNumber from "../routes/BusFindByNumber";

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect exact from="/" to="/bus-finder" />
                <Route excat from="/bus-finder" component={BusFinder} />
                {/* <Route excat path="/suggestion/" component={Suggestion} />
                <Route excat path="/find-by-number" component={BusFindByNumber} /> */}
                <Route component={NoMatch} />
            </Switch>
        );
    }
}