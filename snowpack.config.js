/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: '',
  },
}
