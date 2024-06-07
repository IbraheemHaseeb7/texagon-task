const extractJson = require("../utils/extractJson");

function mainController(req, res) {
    const { q } = req.query;

    if (!q) {
        res.status(400).send("Bad Request");
    }

    try {
        const extractedJson = extractJson(q);
        return res.status(200).json(extractedJson);
    } catch (error) {
        return res.status(500).send(error.toString());
    }
}

module.exports.mainController = mainController;
