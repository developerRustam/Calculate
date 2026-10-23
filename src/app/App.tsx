import { Navbar } from "../widget/Navbar";
import './styles/index.scss';
import { Suspense } from "react";
import { AppRouter } from "./provider/router";

export const App = () => (
  <div className="app dark">
    <Suspense fallback="Loading…">
      <Navbar />
      <AppRouter />
    </Suspense>
  </div>
);
