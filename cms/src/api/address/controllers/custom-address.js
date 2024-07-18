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
      address,
      province,
      city,
      zipcode,
    };

    // Create the address
    const newAddress = await strapi.query('api::address.address').create({ data: addressData });

    // Manually insert into the join table
    await strapi.db.query('members_addresses_links').create({
      data: {
        member_id: memberId,
        address_id: newAddress.id,
        address_order: 1 // or some other default value
      }
    });

    // Sanitize the output
    const sanitizedAddress = await sanitize.contentAPI.output(newAddress, strapi.getModel('api::address.address'));

    ctx.send(sanitizedAddress);
  },
};
