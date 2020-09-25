import React from 'react';

function Cards(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="https://i.pinimg.com/564x/b0/0a/62/b00a62f750b4d19347e7a8b5cfdeae0a.jpg" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}

export default Cards
