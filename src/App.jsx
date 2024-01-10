import { HashRouter } from "react-router-dom";
import GetRoutes from "./router";
import AuthRoute from "./router/AuthRoute";

export default function App() {
  return (
    <div>
      <HashRouter>
        <AuthRoute>
          <GetRoutes />
        </AuthRoute>
      </HashRouter>
    </div>
  );
}
