import service from './base'

async function find(prospectCode) { 
    let response = await  service.get(`/evaluations/prospect/${prospectCode}`);

    return response.data;
}


export default { find };