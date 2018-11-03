import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMovies } from './../interfaces/IMovies';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  items;
  itemsList;
  movieId;
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(){
   
  }

  getMediaList() : Observable<IMovies[]>{

    this.itemsList = this.http.get("../assets/movies.json").pipe(map(res => this.itemsList = res));
    return this.itemsList;
  }


  getMovie(id) : Observable<IMovies>{
    this.movieId = id;
    return this.itemsList.items.find(movie => movie.id.videoId === id);
   
  }
  deleteMovie() : Observable<IMovies[]>{
    console.log(this.itemsList);
    var index = this.itemsList['items'].map(movie => {
      return movie.id.videoId;
     }).indexOf(this.movieId);
    
    this.itemsList.items.splice(index, 1);
    console.log(this.itemsList);
    return new Observable(observer =>  this.itemsList);
  }
}
