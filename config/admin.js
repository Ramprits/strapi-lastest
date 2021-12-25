module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d34a871bfb575fcb5f09fc15cf4ac76'),
  },
});
