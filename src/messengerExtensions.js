let MessengerExtensions;
module.exports = {
    doneLoading: doneLoading,
    getFeatures: getFeatures,
    getUserID: getUserID,
    share: share,
    close: close,
};
doneLoading();
function doneLoading() {
    return new Promise((resolve, reject) => {
        try {
            if (MessengerExtensions) resolve(MessengerExtensions);
            window.extAsyncInit = () => {
                console.log("doneLoading");
                MessengerExtensions = window.MessengerExtensions;
                resolve(window.MessengerExtensions);
            };
        } catch (err) {
            reject(err)
        }
    });
}

function getFeatures() {
    return doneLoading().then(extension =>
        extension.getSupportedFeatures(result =>
                result.supported_features,
            err => new Error(err)));
}

function getUserID() {
    return doneLoading().then(extension =>
        extension.getUserID(function success(uids) {
            // User ID was successfully obtained.
            return uids.psid;
        }, (err, errorMessage) => {
            // Error handling code
            return new Error(err, errorMessage);
        }))
}

function share(message) {
    message = message || {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "I took Peter's 'Which Hat Are You?' Quiz",
                        "image_url": "https://bot.peters-hats.com/img/hats/fez.jpg",
                        "subtitle": "My result: Fez",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://bot.peters-hats.com/view_quiz_results.php?user=24601"
                        },
                        "buttons": [{
                            "type": "web_url",
                            "url": "https://bot.peters-hats.com/hatquiz.php?referer=24601",
                            "title": "Take the Quiz"
                        }]
                    }]
                }
            }
        };
    return doneLoading().then(extension => {
        return extension.beginShareFlow(() => {
                // Share successful
                return "Share successful";
            }, (errorCode, errorMessage) => {
                // The user was not able to share
                return new Error(errorCode, errorMessage);
            },
            message, "broadcast");
    });
}

function close() {
    return doneLoading().then(extension =>
        extension.requestCloseBrowser(
            () => "Close successful",
            err => new Error(err)));
}