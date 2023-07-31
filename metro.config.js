const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

// const config = {
//   resolver: {
//     sourceExts: ['jsx', 'js', 'ts', 'tsx'], // 필요한 다른 확장자 추가
//   },
//   transformer: {
//     babelTransformerPath: require.resolve('react-native-dotenv'),
//   },
// };

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
