import BlockContent from "@sanity/block-content-to-react"
import type { BlockContentProps } from "@sanity/block-content-to-react"
import React from "react"

const ProductBody: React.FC<BlockContentProps> = ({ blocks }) => {
  return (
    <div className="prose lg:prose-xl max-w-none">
      <BlockContent blocks={blocks} />
    </div>
  )
}

export default ProductBody
