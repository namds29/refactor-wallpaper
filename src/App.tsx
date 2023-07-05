import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import LoginForm from "./pages/login/login-form";
import Dashboard from "./pages/dashboard";
import Theme from "./pages/theme";
import Animations from "./pages/animation";
import Wallpapers from "./pages/wallpaper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route element={<Layout children={<Outlet />} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/animation" element={<Animations />} />
          <Route path="/wallpaper" element={<Wallpapers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
