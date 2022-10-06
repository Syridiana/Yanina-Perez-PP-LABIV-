import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import RepartidorInterface from 'src/app/Entities/repartidor-interface';
import { RepartidorService } from 'src/app/Servicios/repartidor.service';

@Component({
  selector: 'app-tabla-repartidor',
  templateUrl: './tabla-repartidor.component.html',
  styleUrls: ['./tabla-repartidor.component.css']
})
export class TablaRepartidorComponent implements OnInit {
  @Output() eventoSeleccioneRe: EventEmitter<RepartidorInterface> =  new EventEmitter<RepartidorInterface>();
  @Input() peliRecibidaABorrar?:RepartidorInterface;
  @Input() movieReceivedToAdd?: RepartidorInterface;
  
  random: any;
  pickedRe?: RepartidorInterface;
  reparList?: RepartidorInterface[];

  imageUrl = '';
  movieName = "";

  constructor(public repartidorService: RepartidorService) {
    
     this.repartidorService.getUsers().subscribe(re => { 
       this.reparList = re as Array<RepartidorInterface>; 
     }) 


   /*  this.movieListId = this.movieService.getMovies(); */

  }

  ngOnInit(): void {
/*     this.movieListId = JSON.parse(localStorage.getItem('movieList')!) as Array<PeliculaI>; */
  }

/*    ngOnChanges(changes: SimpleChanges) {
    if(this.movieListId.findIndex(movie => movie.nombre === this.peliRecibidaABorrar?.nombre) > 0){ 
      this.movieService.removeMovie(this.peliRecibidaABorrar); 
       this.movieListId = JSON.parse(localStorage.getItem('movieList')!) as Array<PeliculaI>; 
    } else if(this.movieReceivedToAdd){ 
       if(this.movieListId.findIndex(movie => movie.nombre === this.movieReceivedToAdd?.nombre) < 0){ 
         this.movieService.addMovie(this.movieReceivedToAdd); 
         this.movieListId = JSON.parse(localStorage.getItem('movieList')!) as Array<PeliculaI>; 
      }
    }
  }  */
/* 
  loadMovie(idStart: number) {

    this.datosApi.obtenerDatos((idStart)).subscribe({
      next: (pelicula: any) => {

        if(this.movieListId.length < 6){
          let peliActual: PeliculaI = {
            id: undefined,
            nombre: 'The shining',
            tipo: Genero.Terror,
            fechaEstreno: '01/01/1990',
            cantPublico: '3.000.000',
            fotoPelicula: 'https://librolibertate.files.wordpress.com/2019/10/the-shining-1.jpg'
          };
          peliActual.id = idStart;
          peliActual.nombre = pelicula.title;
          peliActual.cantPublico = pelicula.popularity;
          peliActual.fechaEstreno = pelicula.release_date;
          
          if(Object.values(Genero).includes(pelicula.genres[0].name)){
            peliActual.tipo = pelicula.genres[0].name;
          } else {
            peliActual.tipo = Genero.Otros;
          }

          peliActual.fotoPelicula = 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/' + pelicula.backdrop_path;
          this.movieListId.push(peliActual);
        }
      


      },
      error: error => { console.log(error) }});

  } */

/*   obtenerLista(id: number) {
    this.datosApi.obtenerListaGenero((id)).subscribe({
      next: (peliculas: any) => {

        peliculas.results.map((item: any) => {
          this.loadMovie(item.id);
        });
      },
      error: error => { console.log(error) }});
  } */

  compare(a: any, b: any) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

/*   sortList() {
    this.movieListId.sort(this.compare);
  } */

  seleccionoRe(id: any) {
    this.pickedRe = this.reparList?.find(re => re.id === id);
    this.eventoSeleccioneRe.emit(this.pickedRe);
  }

}
