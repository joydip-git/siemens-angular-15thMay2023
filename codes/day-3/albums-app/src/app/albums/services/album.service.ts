import { Album } from "src/app/models/album";
import { albumRecords } from "../../data/albumrecords";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, fromEvent } from "rxjs";

export interface IAlbumService {
    getAlbums(): Observable<Album[]>;
    getAlbum(id: number): Observable<Album>;
}

@Injectable()
export class AlbumService implements IAlbumService {
    private url = 'https://jsonplaceholder.typicode.com/photos'

    constructor(private http: HttpClient) {

    }
    getAlbum(id: number): Observable<Album> {
        return this.http.get<Album>(this.url + '/' + id)
    }
    getAlbums() {
        // const obj = { name: 'joy', id: 1 }
        // const copy = { ...obj }
        const obs: Observable<Album[]> = this.http.get<Album[]>(this.url)
        return obs
    }
}