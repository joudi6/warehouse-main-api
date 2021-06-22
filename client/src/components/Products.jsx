import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, Spinner, Container } from 'react-bootstrap'

import fetchApi from '../utils/fetchApi'
import ErrorAlert from './ErrorAlert'

function Products() {
  const [status, setStatus] = useState(null)
  const [products, setProducts] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setStatus('loading')

    async function getProducts() {
      try {
        const productsResponse = await fetchApi('/products')

        if (typeof productsResponse !== 'object') {
          setStatus(productsResponse)
        } else {
          setStatus('success')
          setProducts(productsResponse)
        }
      } catch (e) {
        console.log(e)
      }
    }

    getProducts()
  }, [])

  return (
    <div>
      {typeof status === 'number' ? <ErrorAlert status={status} /> : null}
      {status === 'loading' ? <Spinner animation="border" role="status" /> : null}
      {status === 'success' ? (
        <div>
          <Container fluid style={{ width: '18rem' }}>
            <h3>Products</h3>
            <ListGroup>
              {products?.map((product) => (
                <ListGroupItem
                  onClick={() => {
                    setShow(!show)
                  }}
                >
                  {product.name}
                  {product.articles.map((article) => (
                    <div className={show ? 'visible' : 'hidden'}>
                      <ListGroupItem>{article.amountRequired}</ListGroupItem>
                    </div>
                  ))}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Container>
        </div>
      ) : null}
    </div>
  )
}

export default Products
