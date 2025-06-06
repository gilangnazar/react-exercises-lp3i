import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserProfile from "./components/UserProfile";
import Report from "./components/Report";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/dashboard'
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path='/profile'
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />
        <Route
          path='/report'
          element={
            <Layout>
              <Report />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
