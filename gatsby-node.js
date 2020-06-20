const path = require("path")

const createProductPages = async (graphql, actions) => {
  const result = await graphql(`
    query Products {
      allSanityProduct(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const productNodes = result.data.allSanityProduct.edges.map(
    ({ node }) => node
  )

  productNodes.forEach((product) => {
    // const slug = slugify(product.title)
    // console.log(slug)
    const slug = product.slug.current
    actions.createPage({
      path: `/products/${slug}`,
      component: path.resolve("./src/templates/product.tsx"),
      context: {
        slug,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createProductPages(graphql, actions)
}
