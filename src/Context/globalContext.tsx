import {createContext, useState, ReactNode, useContext} from "react";


type globalProviderProps = {
    children: ReactNode;

}

type globalContextData={
            chave1:number;
            chave2:number;
            filters:String[];
            setChave1:(n:number)=>void;
            setChave2:(n:number)=>void;
            setfilters:(s:String[])=>void;

}



export const globalContext = createContext({} as globalContextData);

export function GlobalProviders({children}:globalProviderProps){
    const [filters, setfilters] = useState<String[]>(['','','','','','','','','','','','','','','','','',''])
    const [chave1, setChave1] =useState<number>(0)
    const [chave2, setChave2] =useState<number>(4000)
    
     return(
        <globalContext.Provider value={{
            chave1,
            chave2,
            filters,
            setChave1,
            setChave2,
            setfilters

        }}>
            {children}
        </globalContext.Provider>
     )


}

export const useGlobal = () =>{
    return useContext(globalContext);
}