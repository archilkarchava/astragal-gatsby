import BlockContent, { BlockContentProps } from "@sanity/block-content-to-react"
import { css } from "linaria"
import React from "react"

const markdownStyles = css`
  @apply text-base leading-relaxed;

  p,
  ul,
  ol,
  blockquote {
    @apply my-4;
  }

  h2 {
    @apply mt-12 mb-4 text-2xl leading-snug;
  }

  h3 {
    @apply mt-8 mb-4 text-xl leading-snug;
  }
`

const ProductBody: React.FC<BlockContentProps> = ({ blocks }) => {
  return (
    <div className={markdownStyles}>
      <BlockContent blocks={blocks} />
    </div>
    // <div className="max-w-2xl mx-auto">
    //   <BlockContent blocks={content} className={markdownStyles} />
    // </div>
  )
}
export default ProductBody
