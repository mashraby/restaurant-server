const { fetch, fetchAll } = require("../../utils/postgres")

const ALL_ADMINS = `
    SELECT * FROM admins
`

const getAdmins = () => fetchAll(ALL_ADMINS)

module.exports = {
    getAdmins
}