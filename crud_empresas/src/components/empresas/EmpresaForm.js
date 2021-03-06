import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";


import * as EnterpriseList from "./EnterpriseList";
const API_DJANGO_URI ='http://127.0.0.1:8000/api/empresas/';
const EmpresaForm = () => {
  const params = useParams();

  const initialState = { id: 0, name: "", address: "", nit: "", phone: 999999 };

  const [empress, setempress] = useState(initialState);

  const handleInputChange = (e) => {
    setempress({ ...empress, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
    
    } catch (error) {
        console.log(params.id)
      console.log(error);
    }
  };
  var registerEmpress = async (newEmpress) => {
    const res = await fetch(API_DJANGO_URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(newEmpress.name).trim(),
            "addres": String(newEmpress.address).trim(),
            "NIT": String(newEmpress.NIT).trim(),
            "phone": String(newEmpress.phone),
        })
    });
    await res.json()
};
  const updateEmpress = async (empressId, updatedEmpress) => {
    const res = await fetch(`${API_DJANGO_URI}${empressId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(updatedEmpress.name).trim(),
            "addres": String(updatedEmpress.address).trim(),
            "NIT": String(updatedEmpress.NIT).trim(),
            "phone": String(updatedEmpress.phone),
        })
    });
    await res.json()
};

  const getEmpress = async (empressId) => {
    try {
      const res = await EnterpriseList.getEmpress(empressId);
      const data = await res.json();
      const [ name, addres, NIT, phone ] = data.empress;
      
      setempress({ name, addres, NIT, phone });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
        getEmpress(params.id);
      }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="col-md-3 mx-auto">
      <h2 className="mb-3 text-center">EMPRESA</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={empress.name}
            onChange={handleInputChange}
            className="form-control"
            maxLength="50"
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            value={empress.address}
            onChange={handleInputChange}
            className="form-control"
            max="50"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">NIT</label>
          <input
            type="text"
            name="nit"
            value={empress.nit}
            onChange={handleInputChange}
            className="form-control"
            
            max="32"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Website</label>
          <input
            type="number"
            name="phone"
            value={empress.phone}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="d-grid gap-2">
        {params.id ? (
            <button type="submit" onClick={updateEmpress} className="btn btn-block btn-primary">
              Update
            </button>
          ) : (
            <button type="submit" onClick={registerEmpress} className="btn btn-block btn-success">
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmpresaForm;
