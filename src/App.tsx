import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "~pages";

const App = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};
export default App;
