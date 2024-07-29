import AllRoutes from "./routes/AllRoutes";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}
