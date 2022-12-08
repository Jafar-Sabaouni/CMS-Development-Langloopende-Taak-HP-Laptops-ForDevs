module.exports = {
  siteMetadata: {
    title: "HP laptop for devs",
    description: "A laptop for developers is a laptop that meets the needs of software developers. These laptops typically have powerful processors and a lot of memory, which allows them to run complex software and handle large data sets. They also often have high-resolution displays and a comfortable keyboard and touchpad, which are important for coding and working on long projects.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://laptop-for-devs.local/graphql",
      },
    },
  ],
};