module.exports = {
    response: response,
    saveAppError: saveAppError
};


function response(res, data, message, success) {
    const responseData = {
        responseData: data,
        message: message,
        success: success
    };

    res.format({
        json: () => {
            res.json(responseData);
        }
    });
}

function saveAppError(err) {
    const loggerObj = {};
    loggerObj.response = JSON.stringify(err);
    loggerObj.addedOn = (new Date).getTime();
    loggerObj.modifiedOn = (new Date).getTime();
    // logObj.save();
    /* Uncomment this to save the log in Database*/
}
