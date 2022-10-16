import { Suspense, StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// styles
import "antd/dist/antd.css";
import "./styles/theme/antd-customized.less";
import "./styles/main.scss";

ReactDOM.render(
    <StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Suspense>
    </StrictMode>,
    document.querySelector("#root")
);
