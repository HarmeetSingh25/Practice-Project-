import React, { useState, createContext } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setdata] = useState([{ id: 1, tittle: "name" }]);
// console.log();

  return (
    <DataContext.Provider value={{ data, setdata }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
