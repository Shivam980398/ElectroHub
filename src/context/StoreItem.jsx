import { createContext } from "react";
import { menu_products } from "../assets/frontend_assets/assets";

export const StoreItem = createContext(null);

const StoreItemProvider = (props) => {
  const contextValue = {
    menu_products,
  };
  return (
    <StoreItem.Provider value={contextValue}>
      {props.children}
    </StoreItem.Provider>
  );
};
export default StoreItemProvider;
