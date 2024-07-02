import { ListGroup } from "react-bootstrap";

const SingleComment = (props) => (
  <ListGroup.Item title={props.author}>
    <span>{props.author} - </span> {props.comment} - <span>{props.rate}</span>
  </ListGroup.Item>
);

export default SingleComment;
