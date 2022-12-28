import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedLayout from "./layouts/SharedLayout";
import SharedShowLayout from "./layouts/SharedShowLayout";
import Error from "./pages/Error";

import Shows from "./pages/Shows";
import SingleShow from "./pages/SingleShow";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<SharedShowLayout />}>
            <Route index element={<Shows />} />
            <Route path=":showId" element={<SingleShow />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
