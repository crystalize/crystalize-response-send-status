const httpStatuses = require("./http-statuses");
const send = require("crystalize-response-send").send;

const statusNamesByCode = {};
for (let { code, name } of httpStatuses) {
    statusNamesByCode[number] = name;
}

const sendStatus = function (res, code) {
    const status = statusNamesByCode[code];

    if (status != null) {
        res.statusCode = code
        return send(res, `${ code } ${ status }`);
    } else {
        res.statusCode = code
        return send(res, `${ code }`);
    }
};

module.exports = {
    name: "crystalize-response-send-status",
    respondsTo: "then",
    callback: (req, res) => Object.assign(res, {
        sendStatus: function (code) {
            return sendStatus(res, code);
        },
    });

    sendStatus,
};
