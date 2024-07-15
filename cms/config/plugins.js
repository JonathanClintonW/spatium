module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'your_jwt_secret_key'),
      },
    },
  });
  