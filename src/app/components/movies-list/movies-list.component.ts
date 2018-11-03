import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

    public moviesList;
    public moviesListPlayer;
    public generes;
    public genere;
    public order;
    public orderList;
    public searchMovie;
    constructor(private router : Router, private _moviesService : MoviesService, route:ActivatedRoute) {
        // override the route reuse strategy - (when clicking on logo - the component needs to reload!)
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };
    }

    ngOnInit() {
        //Get media player box
        this._moviesService.getMediaList().subscribe(data => {console.log(data['items']); this.moviesListPlayer = data['items'];});
        
     
        this.order = '';
        this.searchMovie = "";
        this.orderList  = ['title','publishedAt'];
       
    }
    convertDate(dater){
        var date = new Date(dater);
        return date.getFullYear() +  "/" + (date.getMonth() + 1) +   "/" +  date.getDate() 
      }
    orderByFunc(order){
        console.log(order);
        this.order = order;
       this.moviesListPlayer.sort((a,b) => a['snippet'][order].localeCompare(b['snippet'][order]));
    }
    //Navigate to movie by id
    onSelectMovie(movie) {
        this.router.navigate(['/movie', movie]);
    }

}
