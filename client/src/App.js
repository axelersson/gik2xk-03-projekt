import "./App.css";
import { Typography, Toolbar, AppBar, Box } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./views/Products";
import Cart from "./views/Cart";
import ProductEdit from "./views/ProductEdit";
import ProductDetail from "./views/ProductDetail";

function App() {
  return (
    <div className="App">
      <h1>Säkerhet alltid avstängd</h1>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Produkter</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/cart">Varukorg</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/products/new">halaltech</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Routes>
          <Route exact path="/" element={<Products></Products>}></Route>
          <Route exact path="/products" element={<Products></Products>}></Route>
          <Route exact path="/cart" element={<Cart></Cart>}></Route>
          <Route
            exact
            path="/products/:id"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route
            exact
            path="/products/new"
            element={<ProductEdit></ProductEdit>}
          ></Route>
          <Route
            exact
            path="/products/:id/edit"
            element={<ProductEdit></ProductEdit>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
export default App;
