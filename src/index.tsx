import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import Root from './components/index';

const rootEl = document.getElementById("root");

render(
    <AppContainer>
        <Root/>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/index", () => {
        const NewApp = require("./components/index").default;

        render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            rootEl
        );
    });
}
