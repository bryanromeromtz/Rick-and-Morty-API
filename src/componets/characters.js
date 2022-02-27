
import React from 'react';

const Characters = ({ characters = [] }) => {

  const styles = {
    width: '250px',
  }

  return (
    <div className='row'>
      {
        characters.map((item, idx) => (
          <div key={idx} className='col mb-4'>
            <div className="card" style={styles}>
              <img src={item.image} alt='character' />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p className="card-text">Species: {item.species} </p>
                <p className="card-text">Location: {item.location.name}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Characters;