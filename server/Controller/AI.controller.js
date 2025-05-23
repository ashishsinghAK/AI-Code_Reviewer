const aiService = require("../Services/Ai.service");

exports.responseController = async (req, res) => {
    const {prompt} = req.body;
    if (!prompt) {
        return res.status(400).json({
            success: "false",
            msg: "Prompt is Required"
        })
    }

    const response = await aiService(prompt);
    return res.status(200).json({
        msg: response
    })
}