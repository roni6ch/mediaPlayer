import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterMovies'
})
export class FilterMoviesPipe implements PipeTransform {

    transform(movies : any[], filter : string) : any {
        if(!movies || !filter) {
            return movies;
        }
        return movies.filter(movie => movie.snippet.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }

}
