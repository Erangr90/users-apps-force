import React from 'react'
import { Card } from 'react-bootstrap'

const User = ({ user }) => {
  return (
    <Card
      border='success'
      bg='info'
      className='my-3 p-3 rounded'
      text='light'
      style={{ width: '22rem', borderWidth: '2px' }}>
      <Card.Img src={user.img} style={{ width: '6rem' }} />

      <Card.Body>
        <Card.Title as='div'>
          <strong>
            {user.title + '. ' + user.firstName + ' ' + user.lastName}
          </strong>
        </Card.Title>

        <hr />

        <Card.Text as='div'>
          <strong>Email: </strong>
          {user.email}
        </Card.Text>

        {/* <hr /> */}

        <Card.Text as='div'>
          <strong>Location: </strong>
          {user.country +
            ', ' +
            user.city +
            ', ' +
            user.streetName +
            ' ' +
            user.streetNumber +
            '.'}
        </Card.Text>

        {/* <hr /> */}

        <Card.Text as='div'>
          {' '}
          <strong>Id: </strong>
          {user._id}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default User
