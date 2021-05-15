import React, { useState } from 'react'
import { Form, Col, Button, InputGroup, Container, Jumbotron  } from 'react-bootstrap'
import { Modal } from 'antd';
import {db} from '../../firebase'
import firebase from 'firebase'
function Profile() {
    const [validated, setValidated] = useState(false);
    const [first , setfirst] = useState([]); 
  const [last, setlast] = useState([]);
  const [user , setuser] = useState([]); 
  const [address, setaddress] = useState([]);
  const [food , setfood] = useState([]); 
  const [volume, setvolume] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
      
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = (Event) => {
      
      db.collection('people').add({
        FirstName: first,
        LastName: last,
        UserName:user,
        Address: address,
        Food_detail: volume,
        food_descripation: food,
        timestamp: firebase.firestore.FieldValue.serverTimestamp() 
      })
      Event.preventDefault()
      // setTodos([...Todos, Inputs])
      // setInput([' '])
      alert("Thanku for donation !!");
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
}
    return (
        <div>
        <br/>
        <br/>
        
        <Jumbotron fluid style={{height:"80px"}}>
 
    <h1 style={{fontFamily:"cursive",textAlign:"center", textShadow:"2px 2px blue"}}>PERSONAL DETAILS</h1>
    

</Jumbotron>
        <br/>
        <br/>
        <br/>
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group  as={Col} md="4" controlId="validationCustom01">
          <Form.Label style={{fontFamily:"cursive",fontWeight:"bold"}}>First name</Form.Label>
          <Form.Control
            required
            value={first} onChange={Event => setfirst(Event.target.value)}
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label style={{fontFamily:"cursive",fontWeight:"bold"}}>Last name</Form.Label>
          <Form.Control
            required
            value={last} onChange={Event => setlast(Event.target.value)}
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label style={{fontFamily:"cursive",fontWeight:"bold"}}>Phone number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Prepend>
              {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              value={user} onChange={Event => setuser(Event.target.value)}
              placeholder="PhoneNumber"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label style={{fontFamily:"cursive",fontWeight:"bold"}}>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label style={{fontFamily:"cursive",fontWeight:"bold"}}>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label style={{fontFamily:"cursive",fontWeight:"bold"}}>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formGridAddress1">
    <Form.Label style={{fontFamily:"cursive",fontWeight:"bold"}}>Address 1</Form.Label>
    <Form.Control placeholder="1234 Main St" value={address} onChange={Event => setaddress(Event.target.value)} />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label style={{fontFamily:"cursive",fontWeight:"bold"}}>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>

      <Button onClick={showModal} type="submit">Submit form</Button>
      <Modal
        title="Enter Food detail"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        
        <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Enter food quantity</Form.Label>
    <Form.Control  value={food} onChange={Event => setfood(Event.target.value)}  type="text" placeholder="Enter detail" />
    <br/>
    <br/>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter detail</Form.Label>
    <Form.Control  value={volume} onChange={Event => setvolume(Event.target.value)} as="textarea" rows={3} />
  </Form.Group>
  </Form.Group>
  
</Form>
      </Modal>
    </Form>
    
        </Container>
        {/* <Container>
        <Jumbotron fluid>
  <Container>
    <h1>Food detail</h1>
    
  </Container>
</Jumbotron>
<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>

      <Button type="submit">Submit form</Button>
        </Container> */}
           
        </div>
    )
}

export default Profile
