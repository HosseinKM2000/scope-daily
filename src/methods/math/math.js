const setView = i => {
    const view = Math.abs((i+2)*365-31*100);
    return  view;
}

export {
    setView,
}