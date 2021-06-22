import { Alert } from 'react-bootstrap'

function ConnectionError() {
  return (
    <Alert variant="danger">
      <strong>Sorry! we're trying to reconnect...</strong> it only takes seconds. Maybe get some water? &#128522;
    </Alert>
  )
}

export default ConnectionError
