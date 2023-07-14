module.exports = (req, res, next) => {
    const { model } = req.params
    if (["Chracter", "Film", "Planet"].includes(model)) {
        return next()
    } else {
        throw Error("invalid model")
    }
}