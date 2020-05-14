import { Link } from "gatsby"
import React from "react"

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => {
  return (
    <header className="mb-6 bg-purple-700">
      <div className="max-w-3xl p-10 px-4 py-6 mx-auto my-0">
        <h1 className="m-0">
          <Link to="/" className="text-white no-underline">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

// const OuterContainer = styled.header`
//   background: rebeccapurple;
//   margin-bottom: 1.45rem;
// `

// const InnerContainer = styled.div`
//   margin: 0 auto;
//   max-width: 960px;
//   padding: 1.45rem 1.0875rem;
// `

// const HeaderText = styled.h1`
//   margin: 0;
// `

// const StyledLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
// `

export default Header
