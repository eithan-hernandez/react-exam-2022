import { Row, Col, Container, Carousel, Form } from "react-bootstrap";
import { useState } from "react";

const ImgContainer = (props) => {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState(1);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  props.data.length = items;

  return (
    <div>
      <Container>
        <Row className="my-4">
          <Col className="col-3 ">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Elementos: </Form.Label>
                <Form.Control
                  type="number"
                  placeholder={items}
                  min="1"
                  value={items}
                  onChange={(event) => {
                    if (event.target.value > 0) {
                      setItems(event.target.value);
                      props.getPhotos();
                    }
                  }}
                />
                <Form.Text className="text-muted">
                  Numero de elementos a mostrar
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>

          <Col className="col-6 ">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {props.data.map((photo, index) => (
                <Carousel.Item key={photo.id}>
                  <img
                    className="d-block w-100"
                    src={photo.url}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{photo.title}</h3>
                    <p>{photo.url}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImgContainer;
