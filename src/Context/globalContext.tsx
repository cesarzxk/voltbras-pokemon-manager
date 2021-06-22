import {createContext, useState, ReactNode, useContext, useEffect} from "react";
import {gql}from "@apollo/client";
import { client } from '../services/api';



type globalProviderProps = {
    children: ReactNode;

}

type globalContextData={
    key1:number;
    key2:number;
    data:pokemon[];
    filters:String[];
    setKey1:(n:number)=>void;
    setKey2:(n:number)=>void;
    setfilters:(s:String[])=>void;

}

type pokemon ={
    id:number;
    name:string;
    maxcp:number;
    img:string;
    type:string[];
  }


export const globalContext = createContext({} as globalContextData);

export function GlobalProviders({children}:globalProviderProps){
    
    const [filters, setfilters] = useState<String[]>(['','','','','','','','','','','','','','','','','',''])
    const [key1, setKey1] =useState<number>(0)
    const [key2, setKey2] =useState<number>(4000)
    const [data, setData]  = useState<pokemon[]>([]);

    useEffect(()=>{
        getPokemons()
      }, []);

    
  
    async function getPokemons() {
        await client.query({
        query:gql`
        {
            pokemons(first:1000) {
            number
            name
            maxCP
            image
            types
            }
        }`

        }).then(result => {
        const data = result.data.pokemons.map(response=>{
            return{
            id: response.number,  
            name: response.name, 
            img: response.image, 
            type:response.types,
            maxcp: response.maxCP
            }
        })

        setData(data)

        }
      )
    }
        
    return(
        <globalContext.Provider value={{
            key1,
            key2,
            filters,
            data,
            setKey1,
            setKey2,
            setfilters,
        }}>
            {children}
        </globalContext.Provider>
    )
}

export const useGlobal = () =>{
    return useContext(globalContext);
}


