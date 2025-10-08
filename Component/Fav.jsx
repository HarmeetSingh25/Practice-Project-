import React, { useContext } from "react";
import { DataContext } from "../Context/Context";

const Fav = () => {
  const { data, setdata } = useContext(DataContext);

  const FilterRespie = data.filter((r) => r.fav == true);
   const faa = FilterRespie.length > 0 ? (
        FilterRespie.map((r) => (
          <h1 key={r.id} className="text-2xl text-red-600">
            {r.DishName}
          </h1>
        ))
      ) : (
        <h2 className="text-xl">No favorites found</h2>
      )
  return (
    <div className="w-100 h-100 bg-amber-300">
        {faa}
    </div>
  );
};

export default Fav;
