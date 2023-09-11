import React from "react";
import {products} from "../pages/api/products";

const AppContext = React.createContext(products || null);

export default AppContext;