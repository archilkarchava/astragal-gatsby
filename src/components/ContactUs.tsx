import React from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"
import YandexMap from "./YandexMap"

// const Wrapper = styled.div`
//   background-color: ${props =>
//     (props.primaryBg && props.theme.primary) ||
//     (props.lightBg && props.theme.light) ||
//     (props.darkBg && props.theme.dark) ||
//     props.theme.dark};
//   height: 600px;
//   overflow: hidden;
//   &::after {
//     content: '';
//     display: table;
//     clear: both;
//   }
// `

// const ContactBoxWrapper = styled.div`
//   float: left;
//   width: 50%;
//   height: 100%;
//   ${media.tablet`
//     width: 100%;
//     height: 50%;
//     padding: 20px 0;
//   `};
// `

// const ContactBox = styled.div`
//   margin: 147px 100px;
//   max-width: 470px;
//   padding: 20px;
//   &, a {
//     color: ${props =>
//       setTextColor(
//         (props.primaryBg && props.theme.primary) ||
//           (props.lightBg && props.theme.light) ||
//           (props.darkBg && props.theme.dark) ||
//           props.theme.dark
//       )};
//   }
//   h1 {
//     font-size: 40px;
//     line-height: 1.17;
//     margin-bottom: 60px;
//     text-transform: uppercase;
//     font-weight: 700;
//   }
//   ul {
//     list-style:none;
//     margin-bottom: 60px;
//   }
//   li {
//     font-size: 20px;
//     margin-bottom: 15px;
//     font-weight: 400;
//   }
//   ${media.laptop`
//     margin: 147px 50px;
//   `}
//   ${media.tablet`
//     h1 {
//       font-size: 30px;
//       margin-bottom: 40px;
//     }
//     ul {
//       margin-bottom: 40px;
//     }
//     li {
//       font-size: 18px;
//     }
//     position: relative;
//     top: 50%;
//     transform: translateY(-50%);
//     margin: 0;
//     padding: 0 40px;
//     max-width: 350px;
//   `}
//   ${media.phone`
//     padding: 0 20px;
//     h1 {
//       margin-bottom: 30px;
//     }
//     li {
//       margin-bottom: 10px;
//     }
//     ul {
//       margin-bottom: 30px;
//     }
//   `}
// `

// const MapWrapper = styled.div`
//   float: left;
//   width: 50%;
//   height: 100%;
//   ${media.tablet`
//     width: 100%;
//     height: 50%;
//   `}
//   background-image: url(${staticMapImg});
//   background-position: center center;
//   background-size: cover;
//   height: 100%;
// `

const ContactUs: React.FC = () => {
  const { addresses, emails, phoneNumbers } = useSiteMetadata()

  return (
    <div className="flex flex-col justify-between w-full overflow-hidden text-gray-900 bg-white md:flex-row">
      <div className="py-10 m-auto md:p-0">
        <h1 className="mb-5 text-4xl font-bold leading-none">
          Свяжитесь с нами
        </h1>
        {phoneNumbers.map((phoneNumber) => {
          return (
            <a
              key={phoneNumber}
              className="block mb-2 text-lg"
              href={`tel:${phoneNumber}`}
            >
              {phoneNumber}
            </a>
          )
        })}
        {emails.map((email) => {
          return (
            <a
              key={email}
              className="block mb-2 text-lg"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          )
        })}
        <div className="block text-lg">
          {addresses[0].city}, ул. {addresses[0].street} {addresses[0].streetNo}
        </div>
      </div>
      <div className="w-full h-112 md:h-128 md:w-1/2">
        <YandexMap />
      </div>
    </div>
  )
}

export default ContactUs
