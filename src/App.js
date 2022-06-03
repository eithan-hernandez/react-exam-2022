import "./App.css";

import { Button } from "react-bootstrap";
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
          <p class="navbar-brand" >Examen Parcial - Eithan</p>
          <form className="nav-buttons form-inline">
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

            <Button
              class="btn btn-outline-success my-2 my-sm-0"
              variant="success"
              onClick={() => {
                //fetchPhotos();
                setMode("deploy");
              }}
            >
              deploy{" "}
            </Button>
          </form>
        </div>
      </nav>

      {photos.length !== 0 && mode === "photo" ? (
        <div>
          <h1>photos</h1>
          <ImgContainer
            data={photos}
            getPhotos={() => {
              fetchPhotos();
            }}
          ></ImgContainer>
        </div>
      ) : (
        <div></div>
      )}

      {dataTable.length !== 0 && mode === "table" ? (
        <div>
          <h1>table</h1>
          <PostsTable data={dataTable} setData={setDataTable}></PostsTable>
        </div>
      ) : (
        <div></div>
      )}

      {mode === "deploy" ? (
        <div>
          <h1>deploy</h1>
          <br></br>
          <h4>Desplegados</h4>
          <a href="https://eithan-hernandez.github.io/react-exam-2022">
            deploy en github pages
          </a>{" "}
          <br></br>
          <a href="https://react-rhflycnyeq-uc.a.run.app">
            deploy en google cloud run
          </a>
          <h4>Repositorios</h4>
          <a href="https://github.com/eithan-hernandez/react-exam-2022">
            React github
          </a>{" "}
          <br></br>
          <a href="https://eithan_hernandez@bitbucket.org/eithan_hernandez/react-docker-exam-2022.git">
            Docker bitbucket
          </a>
          <p></p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
