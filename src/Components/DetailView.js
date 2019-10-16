import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import MoveList from './MoveList';

const DefaultView = (props) => {

  const [hidden, isHidden] = useState(true)

  const handleShowMoves = (e) => {
    e.preventDefault()
    isHidden(!hidden)
  }

  const { id, name, sprite, type, moves } = props.pokemon
  const { power, pp, accuracy } = props.moveDetails

  return (
    <>
      <Card style={{ width: '25%' }}>
        <Card.Img variant='top' src={sprite} alt={name} />
        <Card.Body>
          <Card.Title>
            ID: {id} / {name}
          </Card.Title>
          <Card.Text>Type: {type}</Card.Text>
          <Button onClick={handleShowMoves}>Show Moves</Button>
        </Card.Body>
      </Card>
      <div>
        {hidden ? null : <MoveList moveList={moves} movePower={power} movePP={pp} moveAccuracy={accuracy} />}
      </div>
    </>
  )
}

export default DefaultView