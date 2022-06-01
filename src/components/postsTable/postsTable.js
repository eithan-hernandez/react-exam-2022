import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Table } from "react-bootstrap";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./postsTable.module.css";

const PostsTable = (props) => {
  const [reverse, setReverse] = useState(false);

  const [caret] = useState([
    faCaretDown,
    faCaretDown,
    faCaretDown,
    faCaretDown,
    faCaretDown,
    faCaretDown,
    faCaretDown,
    faCaretDown,
  ]);

  const campos = [
    { id: 1, icon: "faCaretDown", nombre: "userId", nombreVar: "userId" },
    { id: 2, icon: "faCaretDown", nombre: "id", nombreVar: "id" },
    { id: 3, icon: "faCaretDown", nombre: "title", nombreVar: "title" },
    { id: 4, icon: "faCaretDown", nombre: "body", nombreVar: "body" },
  ];

  function predicateBy(array) {
    return function (a, b) {
      if (a[array] > b[array]) {
        return 1;
      } else if (a[array] < b[array]) {
        return -1;
      }
      return 0;
    };
  }

  const ordenar = (array, ordenarPor) => {
    array.sort(predicateBy(ordenarPor));
    if (reverse === true) {
      array.reverse();
    }
    props.setData([...array]);
  };

  const changeCaret = (index, reverse) => {
    if (reverse) {
      caret[index] = faCaretUp;
    } else {
      caret[index] = faCaretDown;
    }
  };

  return (
    <Container style={{ minHeight: "17rem" }} className={`${styles.container}`}>
      <Table responsive className="table table-striped">
        <thead>
          <tr>
            {campos.map((campo, index) => (
              <th style={{ textAlign: "center" }} key={campo.id}>
                {campo.nombre}{" "}
                <FontAwesomeIcon
                  className={`mt-2 ${styles.caretDown}`}
                  icon={caret[index]}
                  onClick={() => {
                    ordenar(props.data, campo.nombreVar);
                    setReverse(!reverse);
                    changeCaret(index, reverse);
                  }}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((post, index) => (
            <tr
              key={index}
              onClick={() => {
                /* handleNextPage(post); */
              }}
              style={{ cursor: "pointer" }}
            >
              <td style={{ textAlign: "center" }}>
                <p className="m-2"></p> {post.userId}
              </td>

              <td style={{ textAlign: "center" }}>
                <p className="m-2"></p> {post.id}
              </td>

              <td style={{ textAlign: "center" }}>
                <p className="m-2"></p> {post.title}
              </td>

              <td style={{ textAlign: "center" }}>
                <p className="m-2"></p> {post.body}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PostsTable;
