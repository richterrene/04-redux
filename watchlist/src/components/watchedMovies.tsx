import * as React from 'react';
import {connect} from 'react-redux';
import {Movie, State, Action} from "../reducer";

interface ActionProps {
    deleteMovie: (id: string) => void
}

interface WatchedMovieActionProps {
    name: string,
    id: string,
    onClick: (id: string) => void
}

const WatchedMovie = (props: WatchedMovieActionProps): JSX.Element => (
    <li>{props.name}
        <button className="remove-item btn btn-default btn-xs pull-right">
            <i onClick={() => props.onClick(props.id)} className="fas fa-times"/></button>
    </li>
);

interface WatchedMoviesProps {
    watchedMovies: Movie[]
}

type CombinedProps = ActionProps & WatchedMoviesProps


export const deleteMovie = (id: string): Action => (
    {
        type: 'DELETE_MOVIE',
        id: id
    }
);


const WatchedMovies = (props: CombinedProps): JSX.Element => (
    <div className="col-md-6">
        <div className="todolist">
            <h1>Already Watched</h1>
            <ul id="done-items" className="list-unstyled">
                {props.watchedMovies.length === 0 && <h3>You haven't seen anything!</h3>}
                {props.watchedMovies.map((movie: Movie, index: number) => (
                    <WatchedMovie
                        id={movie.id}
                        key={index}
                        name={movie.name}
                        onClick={() => {
                            props.deleteMovie(movie.id)
                        }}
                    />
                ))}
            </ul>
        </div>
    </div>
);

const mapStateToProps = (state: State): WatchedMoviesProps => ({
    watchedMovies: state.movies.filter((movie: Movie) => movie.watched)
});

const dispatchToProps: ActionProps = {
    deleteMovie: deleteMovie
};

export default connect(mapStateToProps, dispatchToProps)(WatchedMovies);
