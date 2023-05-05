import React from "react";
import "./App.css";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar/Nav1";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Product_Solo_Sales_Page from "./pages/Product_Solo_Sales_Page";
import Solo from "./pages/Product_Solo_nav";
import Product_Solo_RnD_Page from "./pages/Product_Solo_RnD_Page";
import Your_Arena_Page from "./pages/Your_Arena/Your_Arena_Page";
import OverView from "./pages/OverView";
import Product_Spend_RnD_Page    from "./pages/Product_Spend_RnD_Page";
import Product_Spend_Sales_Page    from "./pages/Product_Spend_Sales_Page";
import Product_Spend_Ops_Page    from "./pages/Product_Spend_Ops_Page";
import Product_Spend_HR_Page    from "./pages/Product_Spend_HR_Page";
import Product_Spend_Marketing_Page    from "./pages/Product_Spend_Marketing_Page";
import Product_Spend_Product_Page    from "./pages/Product_Spend_Product_Page";
import Product_Spend_Finance_Page    from "./pages/Product_Spend_Finance_Page";
import Product_Tenure_Page    from "./pages/Product_Tenure/Product_Tenure_Page";
import Product_Infograpic_Page    from "./pages/Product_Infograpic/Product_Infograpic_Page";
import Product_Attrition_Page    from "./pages/Product_Attrition/Product_Attrition_Page";
import Product_Solo_Marketing_Page    from "./pages/Product_Solo_Marketing_Page";
import Product_Solo_HR_Page    from "./pages/Product_Solo_HR_Page";
import Product_Solo_Ops_Page    from "./pages/Product_Solo_Ops_Page";
import Product_Solo_Finance_Page    from "./pages/Product_Solo_Finance_Page";
import Product_Solo_Product_Page    from "./pages/Product_Solo_Product_Page";
import Login from "./pages/Login";
import { Register2 } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/register" element={<Register2/>}/>
      <Route  path="/Arena" element={<Your_Arena_Page/>} />
      <Route  path="/overview" element={<OverView/>}      />
      <Route  path="/Product_Solo_Sales_Page" element={<Product_Solo_Sales_Page/>}      />
      <Route  path="/Product_Solo_RnD_Page" element={<Product_Solo_RnD_Page/>}      />
      <Route  path="/Product_Solo_Marketing_Page" element={<Product_Solo_Marketing_Page/>}      />
      <Route  path="/Product_Solo_HR_Page" element={<Product_Solo_HR_Page/>}      />
      <Route  path="/Product_Solo_Finance_Page" element={<Product_Solo_Finance_Page/>}      />
      <Route  path="/Product_Solo_Ops_Page" element={<Product_Solo_Ops_Page/>}      />
      <Route  path="/Product_Solo_Product_Page" element={<Product_Solo_Product_Page/>}      />
      <Route  path="/Product_Spend_RnD_Page" element={<Product_Spend_RnD_Page/>} />
      <Route  path="/Product_Spend_Sales_Page" element={<Product_Spend_Sales_Page/>} />
      <Route  path="/Product_Spend_Ops_Page" element={<Product_Spend_Ops_Page/>} />
      <Route  path="/Product_Spend_HR_Page" element={<Product_Spend_HR_Page/>} />
      <Route  path="/Product_Spend_Marketing_Page" element={<Product_Spend_Marketing_Page/>} />
      <Route  path="/Product_Spend_Product_Page" element={<Product_Spend_Product_Page/>} />
      <Route  path="/Product_Spend_Finance_Page" element={<Product_Spend_Finance_Page/>} />
      <Route  path="/Product_Tenure_Page" element={<Product_Tenure_Page/>} />
      <Route  path="/Product_Infograpic_Page" element={<Product_Infograpic_Page/>} />
      <Route  path="/Product_Attrition_Page" element={<Product_Attrition_Page/>} />
      <Route  path="/all" element={<Solo/>}      />
      <Route  path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
