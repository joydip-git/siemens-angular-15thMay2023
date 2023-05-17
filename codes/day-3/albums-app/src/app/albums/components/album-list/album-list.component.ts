import { Component } from '@angular/core';
import { albumRecords } from 'src/app/data/albumrecords';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {
  albums: Album[] = albumRecords
}
