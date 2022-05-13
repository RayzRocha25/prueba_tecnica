const API_DJANGO_URI ='http://127.0.0.1:8000/api/empresas/';

export const ListEmpress = async ()=>{
    return await fetch(API_DJANGO_URI);
};
export const getEmpress = async (empressId) => {
    return await fetch(`${API_DJANGO_URI}${empressId}`);
};

export const registerEmpress = async (newEmpress) => {
    return await fetch(API_DJANGO_URI, {
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
};

export const updateEmpress = async (empressId, updatedEmpress) => {
    return await fetch(`${API_DJANGO_URI}${empressId}`, {
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
};

export const deleteEmpress = async (empressId) => {
    return await fetch(`${API_DJANGO_URI}${empressId}`, {
        method: 'DELETE'
    });
};