import Threads from '../components/Threads'
// import axios from 'axios'
// import { BASE_URL } from '../globals'
// import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import ThreadForm from '../components/ThreadForm'

function Gaming(props) {
  return (
    <div className="App">
      <div className="cont">
        <div className="catCont">
          <Card>
            <Card.Header as="h3">Threads</Card.Header>
            <Threads />
          </Card>
        </div>
      </div>
      <div className="cont">
        <ThreadForm
          {...props}
          handleChange={props.handleChange}
          newThread={props.newThread}
          addThread={props.addThread}
        />
      </div>
    </div>
  )
}

export default Gaming
