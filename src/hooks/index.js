import { useQuery } from "@tanstack/react-query"
import { getEconomicNewsData, 
         getPopularNewsData,  } from "src/api/request"

export const useEconomicNewsData = (url) => {
    return useQuery({
        queryKey:["EconomyNews"],
        queryFn: () => {
            return getEconomicNewsData(url)
        }
    })
}
export const usePopularNewsData = ({url,name}) => {
    return useQuery({
        queryKey:[name],
        queryFn: () => {
            return getPopularNewsData(url)
        }
    })
}