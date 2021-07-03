const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'src/components/MdLayout',
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
