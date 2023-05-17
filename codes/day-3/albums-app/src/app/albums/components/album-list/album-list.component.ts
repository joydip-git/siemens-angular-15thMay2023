import { Component, Inject } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumService, IAlbumService } from '../../services/album.service';
import { ALBUM_SERVICE_TOKEN } from 'src/app/constants/appconstants';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  // providers: [AlbumService]
})
export class AlbumListComponent {
  albums?: Album[];
  //private svcRef?: IAlbumService;
  constructor(@Inject(ALBUM_SERVICE_TOKEN) private svcRef: IAlbumService) {
    //this.svcRef = svcRef
    // this.albums = this.svcRef.getAlbums()
  }
}
