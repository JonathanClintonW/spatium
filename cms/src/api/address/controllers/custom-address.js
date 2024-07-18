'use strict';

const { sanitize } = require('@strapi/utils');

module.exports = {
  async createAddress(ctx) {
    const { memberId, address, province, city, zipcode } = ctx.request.body;

    if (!memberId || !address || !province || !city || !zipcode) {
      return ctx.badRequest('Please provide all required address fields');
    }

    const member = await strapi.query('api::member.member').findOne({ where: { id: memberId } });

    if (!member) {
      return ctx.badRequest('Member not found');
    }

    const addressData = {
      member: memberId,
      member_id: memberId,
      address,
      province,
      city,
      zipcode,
    };

    const newAddress = await strapi.query('api::address.address').create({ data: addressData });

    const sanitizedAddress = await sanitize.contentAPI.output(newAddress, strapi.getModel('api::address.address'));

    ctx.send(sanitizedAddress);
  },
};
