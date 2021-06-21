import {createContext, useState, ReactNode, useContext, useEffect} from "react";
import {gql}from "@apollo/client";
import { client } from '../services/api';


type globalProviderProps = {
    children: ReactNode;

}

type globalContextData={
    chave1:number;
    chave2:number;
    data:pokemon[];
    filters:String[];
    setChave1:(n:number)=>void;
    setChave2:(n:number)=>void;
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
    const [chave1, setChave1] =useState<number>(0)
    const [chave2, setChave2] =useState<number>(4000)
    const [data, setData]  = useState<pokemon[]>([]);

    useEffect(()=>{
        getPokemons()
      }, []);
  
    async function getPokemons() {
        await client.query({
        query:gql`
        {
            pokemons(first:151) {
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
            chave1,
            chave2,
            filters,
            data,
            setChave1,
            setChave2,
            setfilters,
        }}>
            {children}
        </globalContext.Provider>
    )
}



export const useGlobal = () =>{
    return useContext(globalContext);
}