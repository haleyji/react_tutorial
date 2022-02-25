import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    '>>'
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
// eslint-disable-next-line react/no-typos
Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;