import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import LoginForm from "./pages/login/login-form";
import Dashboard from "./pages/dashboard/page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route element={<Layout children={<Outlet />} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/sale" element={<SalePage />} />
          <Route path="/ds-hoc-vien" element={<StudentPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
