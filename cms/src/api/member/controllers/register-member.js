'use strict';

const { v4: uuidv4 } = require('uuid');
const { sanitize } = require('@strapi/utils');
const bcrypt = require('bcrypt');

module.exports = {
  async register(ctx) {
    const { username, email, password, name, phone, dob, point } = ctx.request.body;

    if (!username || !email || !password) {
      return ctx.badRequest('Please provide username, email, and password');
    }

    const existingUser = await strapi.query('plugin::users-permissions.user').findOne({ where: { email } });

    if (existingUser) {
      return ctx.badRequest('Email already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const memberData = {
      username,
      email,
      password: hashedPassword,
      name,
      phone,
      dob,
      point: point || 0,
      confirmed: true,
      provider: 'local',
      uuid: uuidv4(),
    };

    const member = await strapi.query('api::member.member').create({ data: memberData });

    const sanitizedMember = await sanitize.contentAPI.output(member, strapi.getModel('api::member.member'));

    ctx.send(sanitizedMember);
  },
};
