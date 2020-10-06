// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-f037fcbd05a88f52d98769e19fda40fbcdd9cfe4.cnxcoxpvfuya.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'TP',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'vH8!I79-504f*Nj3R,o0kb,6q:;t$-~`'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}