// Update with your config settings.

module.exports = {

 
    development: {
      client: 'pg',
      connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'Angular_nodejs_fullstack',
        password: 'postgres',
        port: 5432,
        charset: 'utf8'
      },
      migrations: {
        directory:'./migrations',
      },
      seeds: {
        directory: './seeds'
      }
    }

};
