import React, { Component } from 'react'

class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.sprite = data.sprites.front_default
    this.type = data.types[0].type.name
    this.moves = data.moves.map(el => {
      return <li onClick={this.showDamage} key={el.move.name}>{el.move.name}</li>
    })
    this.move_damage = data.power
  }

  showDamage(e) {
    e.preventDefault()
    console.log(e.target.innerText)
    fetch(`https://pokeapi.co/api/v2/move/${e.target.innerText}/`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.power)
        const pokemon = new Pokemon(data)
        this.setState({ pokemon })
        console.log(pokemon)
      })
      .catch(err => console.log(err))
  }

}

export default Pokemon