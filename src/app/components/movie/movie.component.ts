import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movieObj;
  public safeURL;
  public id;
  constructor(private router : Router,private route : ActivatedRoute, private _moviesService : MoviesService, private _sanitizer: DomSanitizer) {
    
    //Get id by user selection
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    //get Object by id 
    let findMovieObj = this._moviesService.getMovie(this.id);
    console.log(findMovieObj);
    this.movieObj =  findMovieObj ? findMovieObj : this.goToPageNotFound();
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.id);
    
   }

  ngOnInit() {
  }
  convertDate(dater){
    var date = new Date(dater);
    return date.getFullYear() +  "/" + (date.getMonth() + 1) +   "/" +  date.getDate() 
  }
  onDeleteMovie(){
    this._moviesService.deleteMovie();
  }
  goToPageNotFound(){
    this.router.navigate(['/PageNotFound']);
  }
}
