export default {
  Query: {
      user(obj, args, { user }) {
          return user || {};
      }
  },
  User: {
    email: user => user.emails ? user.emails[0].address : {},
    emailStartsWithP: user => user.emails ? user.emails[0].address[0] == 'p': null
  }
}