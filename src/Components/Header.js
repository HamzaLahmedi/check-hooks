import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component"
function Header({setsearchTitle,setsearchRate}) {
  const ratingChanged = (newRating) => {
    setsearchRate(newRating);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <ReactStars  classNames="stars"
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    
  />
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setsearchTitle(e.target.value)}
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
    </Navbar>
  );
}

export default Header;