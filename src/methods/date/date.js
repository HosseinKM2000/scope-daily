function getDeferentDate(TYPE){
    let currentDate;
    const today = new Date();
    let day = today.getDate();
    let month = today.toLocaleString('default', { month: 'long' });
    let year = today.getFullYear();
    switch(TYPE) {
        case "DAY_NUM" : currentDate = day;
        break;
        case "MONTH_NAME" : currentDate = month;
        break;
        case "YEAR_NUM" : currentDate = year;
    }
    return currentDate;
};

export {
    getDeferentDate
};