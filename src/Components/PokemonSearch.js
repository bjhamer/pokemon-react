import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DetailView from './DetailView';

const PokemonSearch = () => {
  const [value, setValue] = useState('')
  const [hidden, setHidden] = useState(true)
  const [evolutionUrl, setEvolutionUrl] = useState('')
  const [pokemon, setPokemon] = useState({
    name: '',
    id: '',
    sprite: '',
    type: '',
    moves: ''
  })
  const [moveDetails, setMoveDetails] = useState({
    power: null,
    pp: null,
    accuracy: null
  })

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}/`)
      .then(res => res.json())
      .then(data => {
        setPokemon({
          name: data.name,
          id: data.id,
          sprite: data.sprites.front_default,
          type: data.types[0].type.name,
          moves: data.moves.map(el => {
            return <li key={el.move.name} onClick={showDamage}>{el.move.name}</li>
          })
        })
      })
      .catch(err => console.log(err))

    setHidden(false)
  }

  const showDamage = (e) => {
    e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/move/${e.target.innerText}/`)
      .then(resp => resp.json())
      .then(data => {
        setMoveDetails({
          power: data.power,
          pp: data.pp,
          accuracy: data.accuracy
        })
      })
      .catch(err => console.log(err))
  }

  const handleEvolve = (e) => {
    e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`)
      .then(res => res.json())
      .then(data => {
        //const evolutionUrl = data.evolution_chain.url
        setEvolutionUrl(data.evolution_chain.url)
        fetch(evolutionUrl)
          .then(res => res.json())
          .then(data => {
            let evolve = data.chain.evolves_to[0].species.name
            if (evolve === pokemon.name) {
              evolve = data.chain.evolves_to[0].evolve_to[0].species.name
              fetch(`https://pokeapi.co/api/v2/pokemon/${evolve}/`)
                .then(res => res.json())
                .then(data => {
                  setPokemon({
                    name: data.name,
                    id: data.id,
                    sprite: data.sprites.front_default,
                    type: data.types[0].type.name,
                    moves: data.moves.map(el => {
                      return <li onClick={showDamage}>{el.move.name}</li>
                    })
                  })
                })
                .catch(err => console.log(err))
            } else {
              fetch(`https://pokeapi.co/api/v2/pokemon/${evolve}/`)
                .then(res => res.json())
                .then(data => {
                  setPokemon({
                    name: data.name,
                    id: data.id,
                    sprite: data.sprites.front_default,
                    type: data.types[0].type.name,
                    moves: data.moves.map(el => {
                      return <li onClick={showDamage}>{el.move.name}</li>
                    })
                  })
                })
                .catch(err => console.log(err))
            }
          })
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="pokemonSearch">
          <Form.Label column sm={2}>
            Search:
            </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={value}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
          </Button>

      </Form>

      <div>
        {hidden ? null : (
          <>
            <br />
            <Button onClick={handleEvolve}>Evolve</Button>
          </>
        )}
      </div>
      {hidden ? null : (
        <DetailView
          pokemon={pokemon}
          moveDetails={moveDetails}
        />
      )}
    </div>
  )
}

export default PokemonSearch