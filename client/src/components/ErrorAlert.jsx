import { Alert } from 'react-bootstrap'

function ErrorAlert(props) {
  console.log(props.status)
  return (
    <div>
      {props.status === 503 && (
        <Alert variant="warning">
          <strong>Sorry! We're trying to reconnect... </strong>
          Try reloading the page.&#128522;
        </Alert>
      )}

      {props.status !== 503 && (
        <Alert variant="danger">
          <strong>Something went wrong! try reloading the page &#128522;</strong>
        </Alert>
      )}
    </div>
  )
}

export default ErrorAlert
