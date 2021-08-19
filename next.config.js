const withImages = require("next-images");


module.exports = withImages({
    env: {
        PUBLIC_URL: "https://your-organization-or-username.github.io/my-nextjs-app",
        assetPrefix: './'
      },
});

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(sass|css|scss)$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           {
//             loader: "postcss-loader",
//             options: {
//               plugins: () => [
//                 require("autoprefixer")()
//               ],
//             },
//           },
//           'sass-loader',
//         ]
//       },
//       {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=app/images/[name].[ext]"},
//     ],
//   },
// };

