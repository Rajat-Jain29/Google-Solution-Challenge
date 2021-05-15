import React from 'react'
// import Mycarousel from '../component/Mycarousel'
// import Mycarousel from './Components/Mycarousel';
import {Badge, Button, Carousel, Col, Container, Jumbotron, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import { MDBFooter } from "mdbreact";

function Home() {

    let dispatch = useDispatch();
    const history = useHistory(); 
    let {user} = useSelector((state) => ({...state}))
    const hello = () => {
        !user ? (
            history.push("/login")
        ):(
            history.push("/user/Profile")
        )
    } 
    
    const beti = () => {
      history.push("/user/Ngo")
    }
    return (
        <div>
          <Container>
          <Carousel>
          <Carousel.Item>
  <img
    className="d-block w-100"
    height="600px"
    src="https://sharemylesson.com/sites/default/files/lesson_image/MM_PARTI_AP01_640.jpg"
    alt="Second slide"
  />

  
</Carousel.Item>

<Carousel.Item>
  <img
    className="d-block w-100"
    height="600px"
    src="https://www.un.org/zerohunger/sites/www.un.org.zerohunger/files/styles/panopoly_image_full/public/images/16-00009ae_e_zhc_info_card.png?itok=zwBEiUml"
    alt="First slide"
  />
  
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    height="600px"
    src="https://www.verdict.co.uk/wp-content/uploads/2017/10/world-food-day.jpg"
    alt="First slide"
  />
  
</Carousel.Item>

<Carousel.Item>
  <img
    className="d-block w-100"
    height="600px"
    src="https://indianfolk.com/wp-content/uploads/2019/04/2017-UNGA-Social-Graphics-Zero-Hunger.png"
    alt="Third slide"
  />

  
</Carousel.Item>
</Carousel>  
          </Container>
        <br />
        <br />
        <br />
        <Container>
        <Jumbotron style={{backgroundColor:"lightgrey",height:"400px"}}>
            <h1 style={{fontFamily:"cursive",float:"right",textShadow:"2px 2px 2px grey"}}>ZERO HUNGER</h1>
        <p style={{fontFamily:"cursive",float:"right"}}>
        After decades of steady decline, the number of people who suffer from hunger – as measured by the prevalence of undernourishment – began to slowly increase again in 2015. Current estimates show that nearly 690 million people are hungry, or 8.9 percent of the world population – up by 10 million people in one year and by nearly 60 million in five years.
        More than 30 Crore Indians Go to Sleep Hungry everyday . And Nearly About 700 million people, meanwhile, go to bed hungry every night, according to UN estimates. Over 90 million children under five are dangerously underweight.                                                                                             
        </p>
        <p>
    <Button style={{fontFamily:"cursive",float:"right"}} onClick={hello} variant="primary">Donation &nbsp;<Badge variant="secondary">till 3 P.M</Badge></Button>
    <br/>
    <br/>
    <br/>
    <Button style={{fontFamily:"cursive",float:"right"}} onClick={beti} variant="primary">NGO's</Button>
  </p>
</Jumbotron>
  
        </Container>


        {/* <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter> */}
    <br/>
    <br/>


    <Container fluid>
    <div style={{height:"100px",backgroundColor:"lightblue",textAlign:"center"}} class="d-flex flex-column">
  <footer class="footer">
    <div>
      <a style={{textAlign:"center"}} href="https://t.me/joinchat/aKGlkut-x19hYzQ1
">Click Here</a>
      <span style={{fontFamily:"cursive"}}> Connect on Telegram.</span>
    </div>
    <div class="ml-auto">
      <span style={{textAlign:"center"}}>Connect on whatsapp.</span>
      <a style={{textAlign:"center", fontFamily:"cursive"}} href="https://chat.whatsapp.com/G1G9yzyacFgAGzU5hMviHt">Click Here</a>
    </div>
  </footer>
</div>
    </Container>



        </div>
    )
}

export default Home
