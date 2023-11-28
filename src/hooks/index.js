import { useQuery } from "@tanstack/react-query"
import { getEconomicNewsData } from "src/api/request"

export const useEconomicNewsData = (url) => {
    return useQuery({
        queryKey:["economyNews"],
        queryFn: () => {
            return getEconomicNewsData(url)
        }
    })
}