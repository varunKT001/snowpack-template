module.exports = {
  mount: {
    src: '/dist',
    public: '/',
  },
  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-react-refresh'],
};
