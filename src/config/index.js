export const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  spotify: {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI
  },
  payment: {
    apiKey: process.env.PAYMENT_API_KEY,
    apiSecret: process.env.PAYMENT_API_SECRET
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME || 'removision_dashboard',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: process.env.JWT_EXPIRY || '7d'
  }
};

export default config;
