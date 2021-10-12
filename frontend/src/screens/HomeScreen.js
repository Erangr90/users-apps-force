import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import User from '../components/User'
import { listUsers } from '../actions/userActions'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  useEffect(() => {
    dispatch(listUsers())
  }, [dispatch])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Row className='py-3'>
            <Col>
              New User? <Link to='/register'>Register</Link>
            </Col>
          </Row>
          <Row>
            {users.map((user, index) => {
              return (
                <Col key={index}>
                  {' '}
                  <User key={user._id} user={user} />{' '}
                </Col>
              )
            })}
          </Row>
        </>
      )}
    </>
  )
}

export default HomeScreen
