import { albumRecords } from "../../data/albumrecords";

export class AlbumService {
    getAlbums() {
        // const obj = { name: 'joy', id: 1 }
        // const copy = { ...obj }
        return [...albumRecords]
    }
}