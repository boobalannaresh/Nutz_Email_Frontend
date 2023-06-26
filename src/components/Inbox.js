import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



export function Inbox({data}) {

  const navigate = useNavigate()


  return (
    <div>
      <div className="back">
        <Button  variant="warning" style={{ fontSize: "20px" }} onClick={() => navigate(-1)}>Back</Button>
      </div>

      <Card>
        <Card.Header as="h5">
          <div className="top-details">
            <h5>From: {data.from}</h5>
            <h5>Date: {data.date }</h5>

          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>Subject: {data.subject}</Card.Title>
          <Card.Text>
            Text: {data.text}
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  )
}


