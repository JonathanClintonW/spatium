module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/auth/local/register-member',
        handler: 'register-member.register',
        config: {
          prefix: '',
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  