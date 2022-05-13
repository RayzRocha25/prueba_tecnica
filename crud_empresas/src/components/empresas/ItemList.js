import React from "react";
import {  NavLink } from "react-router-dom";
import * as EnterpriseList from "./EnterpriseList"

const ItemList = ({ empress , empreslist}) => {
  //console.log(empress);



  const handleDelete = async (empressId) => {
    await EnterpriseList.deleteEmpress(empressId);
    empreslist();
  };
  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">
          {empress.name}
          <NavLink to ={`//${empress.id}`}>
          <button  className="ms-2 btn btn-sm btn-info">
            Update
          </button>
          </NavLink>
        </h3>
        <p className="card-text">
          Locations: <strong>{empress.address}</strong>
        </p>
        <p className="card-text">
          NIT: <strong>{empress.NIT}</strong>
        </p>
        <p className="card-text">
          Contact: <strong>{empress.phone}</strong>
        </p>
        
        <button onClick={() => empress.id && handleDelete(empress.id)} className="btn btn-danger my-2">
          Delete 
        </button>
      </div>
    </div>
  );
};
export default ItemList;
