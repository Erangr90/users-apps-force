import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = ({ location, history }) => {
  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [img, setImg] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [streetName, setStreetName] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  let errors = []

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.firstName || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        setTitle(user.title)
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
        setImg(user.img)
        setCountry(user.country)
        setCity(user.city)
        setStreetName(user.streetName)
        setStreetNumber(user.streetNumber)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      if (title === '' || title === null) {
        errors.push({
          msg: 'The title can not be empty',
        })
      }
      if (typeof title !== 'string') {
        errors.push({
          msg: 'The title must be a string',
        })
      }
      if (title.length < 2) {
        errors.push({
          msg: 'The title must at lest 2 letters',
        })
      }
      if (title.length > 20) {
        errors.push({
          msg: 'The title must at shorter then 20 letters',
        })
      }
      if (firstName === '' || firstName === null) {
        errors.push({
          msg: 'The first name can not be empty',
        })
      }
      if (typeof firstName !== 'string') {
        errors.push({
          msg: 'The first name must be a string',
        })
      }
      if (firstName.length < 3) {
        errors.push({
          msg: 'The first name must at lest 3 letters',
        })
      }
      if (firstName.length > 225) {
        errors.push({
          msg: 'The first name must at shorter then 255 letters',
        })
      }
      if (lastName === '' || lastName === null) {
        errors.push({
          msg: 'The last name can not be empty',
        })
      }
      if (typeof lastName !== 'string') {
        errors.push({
          msg: 'The last name must be a string',
        })
      }
      if (lastName.length < 3) {
        errors.push({
          msg: 'The last name must at lest 3 letters',
        })
      }
      if (lastName.length > 225) {
        errors.push({
          msg: 'The last name must at shorter then 255 letters',
        })
      }
      if (email === '' || email === null) {
        errors.push({
          msg: 'The email can not be empty',
        })
      }
      if (typeof email !== 'string') {
        errors.push({
          msg: 'The email must be a string',
        })
      }
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!re.test(String(email).toLowerCase())) {
        errors.push({
          msg: 'The email is invalidate',
        })
      }
      if (country === '' || country === null) {
        errors.push({
          msg: 'The country can not be empty',
        })
      }
      if (city === '' || city === null) {
        errors.push({
          msg: 'The city can not be empty',
        })
      }
      if (streetName === '' || streetName === null) {
        errors.push({
          msg: 'The street name can not be empty',
        })
      }
      if (streetNumber === null) {
        errors.push({
          msg: 'The street number can not be empty',
        })
      }
      if (errors.length > 0) {
        return
      }

      dispatch(
        updateUserProfile({
          id: user._id,
          title,
          firstName,
          lastName,
          email,
          img,
          country,
          city,
          streetName,
          streetNumber,
          password,
        })
      )
    }
  }
  return (
    <Row>
      <Col md={3}>
        <h2>{user.title + '. ' + user.firstName + ' ' + user.lastName}</h2>
        <Image src={user.img} rounded />
      </Col>
      <Col md={3}>
        {message && <Message variant='danger'>{message}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
        {errors.length > 0
          ? errors.map((err, index) => {
              return (
                <Message key={index} variant='danger'>
                  {err}
                </Message>
              )
            })
          : null}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='firstName'>
              <Form.Label>First name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter first name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='lastName'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='img'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={img}
                onChange={(e) => setImg(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter City'
                value={city}
                onChange={(e) => setCity(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='streetName'>
              <Form.Label>Street name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter street name'
                value={streetName}
                onChange={(e) => setStreetName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='streetNumber'>
              <Form.Label>Street number</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter street number'
                value={streetNumber}
                onChange={(e) =>
                  setStreetNumber(e.target.value)
                }></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }></Form.Control>
            </Form.Group>
            <br />
            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </Col>
    </Row>
  )
}

export default ProfileScreen
