module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/addresses/create-address',
        handler: 'custom-address.createAddress',
        config: {
          prefix: '',
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  