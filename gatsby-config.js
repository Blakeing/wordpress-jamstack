/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WpGraphQL",
        fieldName: "wpgraphql",
        url: "https://wordpressjamstack.zeemde75-liquidwebsites.com/graphql",
      },
    },
  ],
}
