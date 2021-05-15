import { Carousel } from 'react-bootstrap'
import React from 'react'
import './Mycarousel.css'
import Scroll from './Scroll'
// import slide1 from '../assets/img/carousal/slide1.webp'
// import slide2 from '../assets/img/carousal/slide2.webp'
// import slide3 from '../assets/img/carousal/slide3.webp'
function Mycarousel() {
    return (
        <div id="home">
            <Carousel
            controls={false}
            indicators 
            interval={4500} pause={false}
            >
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src="https://www.google.com/search?q=hunger+photos&sxsrf=ALeKk02wF6RoDsYXdZrrMELRH177oBz2hw:1615626137423&tbm=isch&source=iu&ictx=1&fir=NS93s33F_hTATM%252CCcLafDNyiDRp-M%252C_&vet=1&usg=AI4_-kRBtBKl5NT2U7BuUDuZptIk4c9RHw&sa=X&ved=2ahUKEwjL04qw9KzvAhUe7HMBHeJXA-EQ9QF6BAgEEAE#imgrc=NS93s33F_hTATM"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src="https://www.google.com/search?q=hunger+photos&sxsrf=ALeKk02wF6RoDsYXdZrrMELRH177oBz2hw:1615626137423&tbm=isch&source=iu&ictx=1&fir=D_0tOm0czI2CVM%252CXC_4ktNuYYEXUM%252C_&vet=1&usg=AI4_-kTGUCoXfI0oVnPmr-kXHeFRKuRVpQ&sa=X&ved=2ahUKEwjL04qw9KzvAhUe7HMBHeJXA-EQ9QF6BAgNEAE#imgrc=D_0tOm0czI2CVM"
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src="https://www.google.com/search?q=hunger+photos&sxsrf=ALeKk02wF6RoDsYXdZrrMELRH177oBz2hw:1615626137423&tbm=isch&source=iu&ictx=1&fir=JfLk0hxwvaFh8M%252CW6OgLi1tOhHt8M%252C_&vet=1&usg=AI4_-kTWTG71EhgQfGy_j9ABja4Kgp-WoQ&sa=X&ved=2ahUKEwjL04qw9KzvAhUe7HMBHeJXA-EQ9QF6BAgGEAE#imgrc=JfLk0hxwvaFh8M"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
<Scroll />
        </div>
    )
}

export default Mycarousel
