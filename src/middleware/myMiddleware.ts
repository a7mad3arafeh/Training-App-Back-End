

export let logHello = (req, res, next) => {
    
    console.log("Hello From the middle ware");

    next();
}