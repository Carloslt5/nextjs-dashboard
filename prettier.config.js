import styleguide, { plugins as _plugins } from '@vercel/style-guide/prettier'

const customStyleguide = {
  ...styleguide,
  plugins: [..._plugins, 'prettier-plugin-tailwindcss'],
}

export default customStyleguide
