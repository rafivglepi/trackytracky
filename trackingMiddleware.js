const trackRequest = (req, res, next) => {
    // Perform tracking logic here
    // console.log("Request Object:", req);
    
    // Call the next middleware function in the request-response cycle
    next();
};

module.exports = trackRequest;
