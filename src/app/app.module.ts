import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { BoardComponent } from './board.component';
import { NavComponent } from './nav.component';
import { CellComponent } from './cell.component';
import { SearchComponent } from './search.component';
import {MusicService} from './music.service';
import { ContentComponent } from './content.component';
import { CartComponent } from './cart.component'
import { RouterModule, Routes } from '@angular/router';
import { GDataComponent } from './g-data.component';
import { FormComponent } from './form.component';

const appRoutes:Routes=[
{path:'guitar', component: ContentComponent},
{path: 'guitar/:Item' component:GDataComponent},
{path:'cart' component:CartComponent}]

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NavComponent,
    CellComponent,
    SearchComponent,
    ContentComponent,
    CartComponent,
    GDataComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
