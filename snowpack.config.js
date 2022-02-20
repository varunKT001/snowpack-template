module.exports = {
  mount: {
    src: '/dist',
    public: '/',
  },
  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-react-refresh'],
  devOptions: {
    port: 3000,
  },
  optimize: {
    bundle: false,
    minify: true,
    sourcemap: false,
  },
};
