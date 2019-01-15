const env = (key, default_value = null) => {
    return process.env[key] === undefined ? default_value : process.env[key]
}

module.exports = {
    env,

}
