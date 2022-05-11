const Result = require("../utils/errorHandler");
exports.getPrivateData = (req, res, next) => {
    res
        .status(200)
        .json(Result(true, { data: 'You got access to the private data in this route!' }))
}