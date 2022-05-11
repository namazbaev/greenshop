const Result = (status, msg) => {
    return {
        success: status,
        result: msg
    }
}
module.exports = Result