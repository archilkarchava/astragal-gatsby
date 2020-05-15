const createProductPages = async (graphql, actions) => {
  const result = await graphql(`
    query Posts {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postNodes = result.data.allSanityPost.edges.map(({ node }) => node)

  postNodes.forEach((post) => {
    actions.createPage({
      path: `/products/${post.slug.current}`,
      component: require.resolve("./src/templates/product.tsx"),
      context: {
        slug: post.slug.current,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createProductPages(graphql, actions)
}
