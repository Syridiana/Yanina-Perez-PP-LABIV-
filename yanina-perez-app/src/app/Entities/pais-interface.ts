export default class PaisI {
    codigo:string|undefined;
    nombre: string|undefined;
    imagenUrl:string|undefined;

    constructor(codigo: string, nombre: string, imagenUrl: string) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.imagenUrl = imagenUrl;

    }
}
