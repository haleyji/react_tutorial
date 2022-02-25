import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
    state = {
        isLoading: true,
        movies:[]
    }
    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({movies, isLoading:false})
    }
    componentDidMount(){
        this.getMovies();
    }
    render(){
        const {isLoading, movies} = this.state;
        return(
            <div className="movies">
                  <section className="container">
                    <div className="movies">
                    {isLoading ? (
                        <div className="loader">
                            <span className="loader-text">Now Loading...</span>
                        </div>
                    ) : (
                        movies.map((movie)=>(
                            <Movie className="movies"
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}   
                                title={movie.title} 
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))
                    )}
                    </div>
                </section>
            </div>
        )
    }
}

export default App;