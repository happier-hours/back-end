const { ManagementClient } = require('auth0');

const managementClient = new ManagementClient({
  clientId: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
  clientSecret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
  domain: process.env.AUTH0_DOMAIN,
  audience: process.env.AUTH0_AUDIENCE,
  scope: 'read:users'
});

const parseUser = user => ({
  email: user.email,
  password: user.password,
  id: user.user_id
});

const getUser = id => {
  return managementClient.getUser({ id })
    .then(parseUser);
};

const getUsers = ids => {
  return managementClient.getUsers({
    q: `user_id: ${ids.join(' OR ')}`
  })
    .then(users => users.map(parseUser));
};

module.exports = {
  getUser,
  getUsers
};

