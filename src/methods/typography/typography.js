function copyUrlPath(){
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    console.log("copy")
};

export {
    copyUrlPath
};