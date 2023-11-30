import instance from "../axiosConfig";

const getEconomicNewsData = async (url) => {
    const data = await instance(url);
    return data;
};
const getPopularNewsData = async (url) => {
    const data = await instance(url);
    return data;
};

export {
    getEconomicNewsData,
    getPopularNewsData,
}
