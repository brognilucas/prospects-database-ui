import React,  { useEffect , useState } from 'react';
import service from '../../services/prospects'
import List from './List';


const ProspectListContainer = (prospects) => { 
    const [state, setState] = useState([]);


    async function findProspects(){ 
        let prospects = await service.find()

        setState(prospects);

        console.log('prospects ' , prospects)
    }


    useEffect(() => { 
        findProspects()
    }, [])


    return ( 
        <List prospects={state} />
    )

}


export default ProspectListContainer;