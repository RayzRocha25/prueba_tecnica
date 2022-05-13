import React, { useEffect, useState } from "react";
import * as EnterpriseList from "./EnterpriseList";
//components

import ItemList from "./ItemList";



const ListEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);

  const listEmpresas = async () => {
    try {
      const res = await EnterpriseList.ListEmpress();
      const data = await res.json();
      setEmpresas(data.empresas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    listEmpresas();
  },[]);
  return (
    <div className="row">
      {empresas.map((empress) => (

        <ItemList key = {empress.id} empress ={empress} empresalist ={ListEmpresas} />
      ))}
    </div>
  );
};
export default ListEmpresas;
