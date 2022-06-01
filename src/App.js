import logo from "./logo.svg";
import "./App.css";

import { Col, Container, Row, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

//import Swal from "sweetalert2";

import PostsTable from "./components/postsTable/postsTable";
import ImgContainer from "./components/imgContainer/imgContainer";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [mode, setMode] = useState(null);

  const fetchDataTable = async () => {
    let apiUrl = "https://jsonplaceholder.typicode.com/posts";
    await axios
      .get(apiUrl)
      .then((res) => {
        setDataTable(res.data);
        console.log(dataTable);
      })
      .catch();
  };

  const fetchPhotos = async () => {
    let apiUrl = "https://jsonplaceholder.typicode.com/photos";
    await axios
      .get(apiUrl)
      .then((res) => {
        setPhotos(res.data);
        console.log(photos);
      })
      .catch();
  };

  return (
    <div className="App">
      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <nav class="navbar navbar-light bg-light justify-content-between navbar-fixed-top">
        <div class="container">
          <a class="navbar-brand">Navbar</a>
          <form class="form-inline">
            <Button
              variant="primary"
              onClick={() => {
                fetchDataTable();
                setMode("table");
              }}
            >
              Button tabla
            </Button>

            <Button
              variant="primary"
              onClick={() => {
                fetchPhotos();
                setMode("photo");
              }}
            >
              Button fotos
            </Button>

            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <Row className="my-4 p-0 m-0">
        <Col className="col-6 p-0">
          <Button
            variant="primary"
            onClick={() => {
              fetchDataTable();
              setMode("table");
            }}
          >
            Button tabla
          </Button>
        </Col>

        <Col className="col-6 p-0">
          <Button
            variant="primary"
            onClick={() => {
              fetchPhotos();
              setMode("photo");
            }}
          >
            Button fotos
          </Button>
        </Col>
      </Row>

      <h1>photos</h1>
      {photos.length !== 0 && mode === "photo" ? (
        <ImgContainer data={photos} getPhotos  = {()=>{fetchPhotos()}}></ImgContainer>
      ) : (
        <div></div>
      )}

      <h1>table</h1>
      {dataTable.length !== 0 && mode === "table" ? (
        <PostsTable data={dataTable} setData={setDataTable}></PostsTable>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
