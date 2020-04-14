module.exports = {
  siteMetadata: {
    title: "Binoy",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolio",
        path: `${__dirname}/src/portfolio`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: "gatsby-remark-images",
      options: {
        maxWidth: 590,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 650,
              backgroundColor: "transparent",
              linkImagesToOriginal: false,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-responsive-iframe",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-117102889-1",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Binoy",
        short_name: "Binoy",
        start_url: "/",
        backgroundColor: "#002331",
        display: "standalone",
        icon: "src/static/logo.png",
      },
    },
    "gatsby-plugin-offline",
  ],
};
