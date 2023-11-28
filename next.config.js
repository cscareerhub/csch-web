const withMDX = require('@next/mdx');

module.exports = withMDX({
  layoutPath: 'src/components/Layout',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both'
  },
  reExportDataFetching: false
})();
