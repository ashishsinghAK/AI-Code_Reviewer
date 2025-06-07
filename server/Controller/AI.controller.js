const aiService = require("../Services/Ai.service");

exports.responseController = async (req, res) => {
    const {code} = req.body;
    if (!code) {
        return res.status(400).json({
            success: "false",
            msg: "Prompt is Required"
        })
    }

    const response = await aiService(code);
    return res.status(200).json({
        msg: response
    })
}