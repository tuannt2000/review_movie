import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "~/layouts";
import { routes } from "~/routes";
import DefaultLayoutAdmin from "./layouts/DefaultLayoutAdmin/DefaultLayoutAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            let Layout = DefaultLayout;
            let LayoutAdmin = DefaultLayoutAdmin;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.role === "admin" ? (
                    <LayoutAdmin>
                      <Page />
                    </LayoutAdmin>
                  ) : (
                    <Layout>
                      <Page />
                    </Layout>
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
