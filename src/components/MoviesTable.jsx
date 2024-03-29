import React,{Component} from 'react'
import Table from './common/Table';
import Like from './common/Like';


class MoviesTable extends Component {
    
    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {
            key: 'like',
            content: movie => <Like liked={movie.liked} onClick={ ()=> this.props.onLike(movie)}/>,
        },
        {
            key: 'delete',
            content: movie => <button onClick={this.props.onDelete.bind(this, movie)} className="btn btn-danger btn-sm">Delete</button>
        },
    ]

    render() { 
        const {movies, sortColumn,onSort} = this.props;
  
        return (
            <Table data={movies} columns={this.columns} sortColumn={sortColumn} onSort={onSort}/> 
        )
    }
}
 

export default  MoviesTable;