module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '13bd9c728a75474afe3519d2678015f0'),
  },
});
