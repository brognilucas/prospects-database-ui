import service from './base'

async function find(prospectCode) { 
    let response = await  service.get(`/evaluations/prospect/${prospectCode}`);

    return response.data;
}

async function create(evaluation) { 
    return service.post(`/evaluations`, evaluation);
}


export default { find, create };