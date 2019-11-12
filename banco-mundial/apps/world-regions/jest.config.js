module.exports = {
  name: 'world-regions',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/world-regions',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
