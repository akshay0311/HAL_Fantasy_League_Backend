const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'jnudfptd',
    password: 'UX-BVru3UEOZSyfPeBKktTGMJNbjXeHP',
    host: 'john.db.elephantsql.com',
    port: 5432,
    database: 'jnudfptd'
});

module.exports = pool;