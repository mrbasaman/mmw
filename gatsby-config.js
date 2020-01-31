/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Make My Website",
    description:
      "Make My Website - Webdesign Melbourne | WebDesign Werribee Aus | WebDesign Wyndham | Webdesign Liverpool Aus | Webdesign parramatta | Web Design Werribee | Web Designer Werribee",
    devender: "Narwa;l is checking the something",
  },
  plugins: [
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "makemywebsite.com.au",
        protocol: "https",
        hostingWPCOM: false,
      },
    },
  ],
}
