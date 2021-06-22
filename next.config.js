const withTM = require('next-transpile-modules')(['@iconify-icons/ic/round-miscellaneous-services']);


module.exports = withTM({
  reactStrictMode: true,
  
  images:{
    domains:['img.pokemondb.net']
}
});
