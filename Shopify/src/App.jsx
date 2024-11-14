import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import HomeLiving from "./Pages/Home&Living";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Beauty from "./Pages/Beauty";
import Error from "./Error";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext"; // Import the CartProvider
import { WishlistProvider } from "./WishlistContext";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/home&Living" element={<HomeLiving />} />
                <Route path="/beauty" element={<Beauty />} />
                <Route path="*" element={<Error />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                
                <Route path="/profile" element={<Profile />} />
              </Route>
              <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

//  username : arpita17Rai    pass: 123Arpita@
