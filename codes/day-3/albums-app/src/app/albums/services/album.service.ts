import { Album } from "src/app/models/album";
import { albumRecords } from "../../data/albumrecords";

export interface IAlbumService {
    getAlbums(): Album[];
}
export class AlbumService implements IAlbumService {
    getAlbums() {
        // const obj = { name: 'joy', id: 1 }
        // const copy = { ...obj }
        return [...albumRecords]
    }
}