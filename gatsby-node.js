const path = require("path");
const speakingurl = require("speakingurl");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === "MarkdownRemark") {
    if (getNode(node.parent).dir.includes("/portfolio")) {
      const slug = createFilePath({
        node,
        getNode,
        basePath: "portfolio",
      });
      createNodeField({
        node,
        name: "slug",
        value: `/portfolio/${speakingurl(slug)}`,
      });
      createNodeField({
        node,
        name: "type",
        value: "portfolio",
      });
    } else {
      const slug = createFilePath({
        node,
        getNode,
        basePath: "blog",
      });
      createNodeField({
        node,
        name: "slug",
        value: `/blog/${speakingurl(slug)}`,
      });
      createNodeField({
        node,
        name: "type",
        value: "blog",
      });
    }
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                type
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.type === "portfolio") {
          createPage({
            path: node.fields.slug,
            component: path.resolve("./src/portfolio/PortfolioLayout.jsx"),
            context: {
              slug: node.fields.slug,
              type: node.fields.type,
            },
          });
        } else {
          createPage({
            path: node.fields.slug,
            component: path.resolve("./src/blog/BlogLayout.jsx"),
            context: {
              slug: node.fields.slug,
              type: node.fields.type,
            },
          });
        }
      });

      resolve();
    });
  });
};
