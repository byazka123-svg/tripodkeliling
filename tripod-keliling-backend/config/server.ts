export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Pastikan 0.0.0.0
  port: env.int('PORT', 1337),
  url: 'https://admin.tripodkeliling.com', // URL publik kamu
  app: {
    keys: env.array('APP_KEYS'),
  },
});
