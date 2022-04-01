const { keyOrder } = require('./prettier-package-json.config');

module.exports = {
  rules: {
    'require-author': 'error',
    'require-description': 'error',
    'require-engines': 'error',
    'require-license': 'error',
    'require-name': 'error',
    'require-repository': 'error',
    'require-version': 'error',
    'require-bugs': 'error',
    'require-homepage': 'error',
    'require-keywords': 'off',
    'bin-type': 'error',
    'config-type': 'error',
    'description-type': 'error',
    'devDependencies-type': 'error',
    'directories-type': 'error',
    'engines-type': 'error',
    'files-type': 'error',
    'homepage-type': 'error',
    'keywords-type': 'error',
    'license-type': 'error',
    'main-type': 'error',
    'man-type': 'error',
    'name-type': 'error',
    'preferGlobal-type': 'error',
    'private-type': 'error',
    'repository-type': 'error',
    'scripts-type': 'error',
    'version-type': 'error',
    'valid-values-license': ['error', ['MIT']],
    'valid-values-publishConfig': [
      'error',
      [{ access: 'public', registry: 'https://npm.pkg.github.com/' }],
    ],
    'no-restricted-dependencies': [
      'error',
      [
        '@types/*',
        '@commitlint/*',
        '@testing-library/*',
        '@babel/*',
        'babel-*',
        '@storybook/*',
        'eslint',
        'eslint-*',
        'tslint',
        'tslint-*',
        'prettier',
        'jest',
        'jest-*',
        'husky',
        'lint-staged',
        'typescript',
        'webpack',
        'webpack-*',
        'rollup',
        'rollup-*',
        'ts-*',
        'cypress',
        'cypress-*',
        '@cypress/*',
        'react-app-rewired',
        'react-scripts',
      ],
    ],
    'no-restricted-pre-release-dependencies': 'off',
    'no-restricted-devDependencies': ['error', ['tslib', 'core-js', 'tslint', 'tslint-*']],
    'no-restricted-pre-release-devDependencies': 'off',
    'prefer-alphabetical-dependencies': 'error',
    'prefer-alphabetical-peerDependencies': 'error',
    'prefer-alphabetical-bundledDependencies': 'error',
    'prefer-alphabetical-optionalDependencies': 'error',
    'prefer-property-order': ['error', keyOrder],
    'name-format': 'error',
    'version-format': 'error',
  },
};
