import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '~/layouts';
import { routes } from '~/routes';

function App() {
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
                </Routes>
            </div>
        </Router>
    );
}

export default App;
