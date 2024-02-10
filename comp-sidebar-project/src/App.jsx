import { Route, Routes, createBrowserRouter } from "react-router-dom";
import AllApps from "./pages/AllApps";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Storage from "./pages/Storage";
import RootLayout from "./layouts/RootLayout";

export default function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<AllApps />} />
          <Route path="/analytics/:aID" element={<Analytics />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/build/:bID" element={<Build />} />
        </Routes>
      </RootLayout>
    </>
  );
}
