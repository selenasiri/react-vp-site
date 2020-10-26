import React from 'react'

const GreatDivas = () => {
  return (
    <div id="contents1">
        <div>
          <div id="artist"></div>
        </div>

        <h1>Search Artist</h1>
        <select id="selectedArtist" onchange="getArtist()">
          <option value="Maria Callas">Maria Callas</option>
          <option value="Luciano Pavarotti">Luciano Pavarotti</option>
          <option value="Joan Sutherland">Joan Sutherland</option>
          <option value="Renata Tebaldi">Renata Tebaldi</option>
          <option value="Montserrat Caballe">Montserrat Caballé</option>
        </select>
      </div>
  )
}

export default GreatDivas
