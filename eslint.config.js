import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
  },
  {
    files: ['**/*.vue'],
    rules: {
      'no-console': 'off',
      'vue/operator-linebreak': ['error', 'before'],
      'antfuw/top-level-function': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      'node/prefer-global/process': 'off',
      'ts/consistent-type-definitions': 'off',
    },
  },

)
