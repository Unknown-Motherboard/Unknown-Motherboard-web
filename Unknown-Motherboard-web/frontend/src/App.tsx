import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Product from './Products/Products';
import Home from './Home/Home';
import Orders from './orders/Orders'
import OrderDetail from './orders/OrderDetails';
import Payment from './Payment/Payment';
import CheckoutSteps from './Payment/CheckoutSteps';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <Router>
        <div className="grid-container">
            <head>
                <link rel="stylesheet" href="style.css"></link>
                <title> Unknown-Motherboard</title>
            </head>
            <body>
                <div>
                    <header className="header">
                        <div className="brand">
                        <button onClick={openMenu}>&#9776;</button>
                            <a href="index.html">Unknown-Motherboard</a>
                        </div>
                        <div className="header-links">
                            <Link to="/">Home</Link>
                            <Link to="/catalog">Catalog</Link>
                            <Link to="/orders/">Orders</Link>
                            <Link to="/Payment/">Payment</Link>
                        </div>
                    </header>
                    <aside className="sidebar">
                        <h3>Shopping Categories</h3>
                        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                        <ul>
                            <li>
                                <a href="index.html">Pants</a>
                            </li>
                            <li>
                                <a href="index.html">Shirts</a>
                            </li>
                        </ul>
                    </aside>
                    <main className ="main">
                        <switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/catalog">
                                <Product />
                            </Route>
                            <Route path="/orders">
                                <Orders />
                            </Route>
                            <Route path="/order/:id">
                                <OrderDetail />
                            </Route>
                            <Route path="/Payment">
                                <Payment />
                            </Route>
                            <Route path="/Payment">
                                <CheckoutSteps />
                            </Route>
                        </switch>
                    </main>
                    <footer className="footer">
                        &copy; 2021 Unknown-Motherboard
                    </footer>
                </div>
            </body>
        </div>
    </Router> 
    
  );
}

export default App;
