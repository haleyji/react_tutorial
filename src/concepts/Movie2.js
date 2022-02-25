import React from 'react';
import PropTypes from 'prop-types';

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'helloooooo'
)
function Movie ({id, year, title, poster, summary, genres}) {
    return(
        <div className="movie">
            {element}
            <img src={poster} alt={title} title={title} />
            <div className="movie-data">
                <h2 className="movie-title">{title}</h2>
                <h5 className="movie-year">{year}</h5>
                <li className="movie-genres">
                    {genres.map((genre, idx)=>(
                        <li key={idx} className="genres-genre">
                            {genre}
                        </li>
                    ))}
                </li>
                <p className="movie-summary">{summary.slice(0,140)}</p>
            </div>
        </div>
    )
}
