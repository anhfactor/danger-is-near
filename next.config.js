const withFonts = require('next-fonts');

module.exports = withFonts({
   enableSvg: true,
   webpack(config, options) {
    config.module.rules.push(
    {
      test: /\.(gif|png|jpe?g|svg|xml|jpeg)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'images/',
      },
    },
    {
      test: /\.(mp3|wav|ogg)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'audio/',
      },
    },
    {
      test: /\.ttf$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts/',
          },
        },
      ],
    },
    );
    return config;
  },
}); 