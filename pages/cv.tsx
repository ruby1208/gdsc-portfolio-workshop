import { NextPage } from "next"
import AboutMe from "../components/about-me"
import Container from "../components/container"
import ReactPDF from '@react-pdf/renderer'

const CV: NextPage = () => {
  return (
    <>
      <Container>    
        <ReactPDF
          file = {{
            url: '/CV_Ruby_Ng.pdf'
          }}>
        </ReactPDF>
        <AboutMe/>

      </Container>
    </>
  )
}

export default CV