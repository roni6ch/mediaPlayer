import {AppRoutingModule, routingComponents} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

/* Services */
import {MoviesService} from './services/movies.service';

/* angular-bootstrap-md */
import {MDBBootstrapModule} from 'angular-bootstrap-md';

/* Components */
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

/* Pipes */
import {FilterMoviesPipe} from './pipes/filter-movies.pipe';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        routingComponents,
        PageNotFoundComponent,
        FilterMoviesPipe,
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        OrderModule,
        MDBBootstrapModule.forRoot()
    ],
    exports: [],
    providers: [MoviesService],
    bootstrap: [AppComponent]
})
export class AppModule {}