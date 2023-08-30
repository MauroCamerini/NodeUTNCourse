module.exports = {
    password: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/.test(value),
    email: (value) => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value)
}