import { render } from 'react-dom';

// React-Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Redux
import store from "./store/store";
import { Provider } from "react-redux";

// Pages
import Layout from './pages/Layout'
import Home from './pages/Home';
import About from './pages/About';
import Freights from './pages/Freights';
import AddFreight from './pages/AddFreight';
import Bid from './pages/Bid';

// Personal pages
import MyLoads from './pages/PersonalPage/MyLoads';
import MyOffers from './pages/PersonalPage/MyOffers';

// Global CSS
import './assets/index.css';

render(
  <Provider store={store}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/freights" element={ <Freights /> } />
          <Route path="/add-freight" element={ <AddFreight /> } />

          <Route path="freights/:address/bid" element={ <Bid /> } />

          <Route path="/my-loads" element={ <MyLoads /> } />
          <Route path="/my-offers" element={ <MyOffers /> } />
        </Route>
      </Routes>
    </BrowserRouter>,

  </Provider>,

  document.getElementById("root")
);
