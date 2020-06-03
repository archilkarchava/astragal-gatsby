import BlockContent from "@sanity/block-content-to-react"
import { css } from "linaria"
import React from "react"

const markdownStyles = css`
  @apply text-lg leading-relaxed;

  p,
  ul,
  ol,
  blockquote {
    @apply my-4;
  }
  ul,
  ol {
    @apply ml-8;
  }

  ul {
    @apply list-disc;
  }

  li {
    @apply list-decimal;
  }

  h2 {
    @apply text-3xl mt-12 mb-4 leading-snug;
  }

  h3 {
    @apply text-2xl mt-8 mb-4 leading-snug;
  }
`

interface Props {
  content: object | object[]
}

const ProductBody: React.FC<Props> = ({ content }) => {
  return (
    <BlockContent blocks={content} className={markdownStyles} />
    // <div className="max-w-2xl mx-auto">
    //   <BlockContent blocks={content} className={markdownStyles} />
    // </div>
  )
}
export default ProductBody
