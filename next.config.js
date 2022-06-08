/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
   webpack(config, options) {
     config.module.rules.push({
       loader: '@svgr/webpack',
       issuer: /\.[jt]sx?$/,
       options: {
         prettier: false,
         svgo: true,
         svgoConfig: {
           plugins: [{
             name: 'preset-default',
             params: {
               override: {
                 removeViewbox: false
               }
             }
           }],
         },
         titleProp: true,
       },
       test: /\.svg$/,
     
     });

     return config;
   },
};