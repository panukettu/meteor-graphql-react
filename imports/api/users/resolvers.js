export default {
  Query: {
      user(obj, args, { user }) {
          return user || {};
      }
  },
  User: {
    email: user => user.emails ? user.emails[0].address : {},
    isAdmin: user => user.emails ? user.emails[0].address === 'panu@panu.com' : false
  }
}