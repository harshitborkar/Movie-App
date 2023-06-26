import React from "react";
class  MovieCard extends React.Component{
    render(){
        const {movie}=this.props
        return (
            <div className="movie-card">
            <div className="left">
                <img src={movie.Poster} alt="movie-poster"/>
                <button id="search-btn">Search</button>
            </div>
            <div className="right"></div>
            <div className="title">{movie.Title}</div>
            <div className="plot">{movie.Plot}</div>
            <div className="footer">
                <div className="rating">{movie.iimdbRating}</div>
                <button className="favourite-btn">Favorite</button>
            </div>
            </div>
            )
        }
    }
    
export default MovieCard;
