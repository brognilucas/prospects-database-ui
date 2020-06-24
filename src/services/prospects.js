import service from './base'

async function findByCode(code) { 
    let response = await  service.get(`/prospects/${code}`);

    return response.data;
}


async function find(filter  = {}) { 
    let params = new URLSearchParams(filter).toString();
    let response = await service.get("/prospects" , { params })

    return response.data;
}


export default { find , findByCode };