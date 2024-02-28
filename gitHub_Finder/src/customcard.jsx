import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./assets/style.module.css";

function customcard({ gitData }) {
  return (
    <>
      <div className={`w-25 mx-auto my-4  ${styles.innerContainer}`}>
        <section>
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={gitData?.avatar_url} />
            <Card.Body>
              <Card.Title>{gitData?.name}</Card.Title>
              <Card.Text>{gitData?.bio}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item> followers: {gitData?.followers} </ListGroup.Item>
              <ListGroup.Item>following: {gitData?.following} </ListGroup.Item>
              <ListGroup.Item>
                public repo: {gitData?.public_repos}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </section>
      </div>
    </>
  );
}

export default customcard;
