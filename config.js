const env = process.env;

const config = {
  db: { /* don’t expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'freedb.tech',
    user: env.DB_USER || 'freedbtech_geshann',
    password: env.DB_PASSWORD || 'G2VjjQ5d47zyjqX',
    database: env.DB_NAME || 'freedbtech_languagesabc',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;
