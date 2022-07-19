import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '~/layouts';
import { routes } from '~/routes';
import React, { useState } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function App() {
    const [message, setMessage] = useState(true);

    function saveLogin() {
        const query = new URLSearchParams(window.location.search);
        const token = query.get("token");
        console.log(query, token);
        if (token && token.length > 0) localStorage.setItem("token", token);
        setMessage(false);
        // window.location.href = "/";
    }

    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        let Layout = DefaultLayout;

                        const Page = route.component;
                        return <Route key={index} path={route.path} element={
                            <Layout>
                                <Page />
                            </Layout>}
                        />
                    })}
                    <Route path="/login" element={
                        <Snackbar open={message} autoHideDuration={1000} onClose={saveLogin}>
                            <MuiAlert elevation={6} variant="filled" severity="success">SuccessFully Logged In</MuiAlert>
                        </Snackbar>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
