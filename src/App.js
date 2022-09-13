import { Routes, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/layouts/authScreen/PrivateScreen";
import LoginScreen from "./components/layouts/authScreen/LoginScreen";
import RegisterScreen from "./components/layouts/authScreen/RegisterScreen";
import ForgotPasswordScreen from "./components/layouts/authScreen/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/layouts/authScreen/ResetPasswordScreen";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/*" element={<PrivateScreen />} />
        </Route>

        <Route path="/login" element={<LoginScreen />} />

        <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
        <Route
          path="/passwordreset/:resetToken"
          element={<ResetPasswordScreen />}
        />
      </Routes>
    </div>
  );
};

export default App;
