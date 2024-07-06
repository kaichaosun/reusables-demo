module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@': './app',
        },
      },
    ],
  ],
};
