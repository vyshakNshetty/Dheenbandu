import AppRoutes from "./routes/AppRoutes";
import useScrollTop from "./hooks/useScrollTop";

function App() {
  useScrollTop();
  return <AppRoutes />;
}

export default App;