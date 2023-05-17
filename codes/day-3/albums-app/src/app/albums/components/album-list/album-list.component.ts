import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumService, IAlbumService } from '../../services/album.service';
import { ALBUM_SERVICE_TOKEN } from 'src/app/constants/appconstants';
import { Observable, Subscription } from 'rxjs';

@Component({
  //selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  // providers: [AlbumService]
})
export class AlbumListComponent implements OnInit, OnDestroy {
  filterText = ''
  albums?: Album[];
  loadingComplete = false
  errorMessage = ''
  private albumSubscription?: Subscription;

  //private svcRef?: IAlbumService;
  constructor(@Inject(ALBUM_SERVICE_TOKEN) private svcRef: IAlbumService) {
    //this.svcRef = svcRef
    // this.albums = this.svcRef.getAlbums()
  }
  ngOnDestroy(): void {
    this.albumSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    // this.albums = this.svcRef.getAlbums()
    const obs: Observable<Album[]> = this.svcRef.getAlbums()
    this.albumSubscription = obs.subscribe({
      next: (arr: Album[]) => {
        this.albums = arr.splice(0, 9)
        this.loadingComplete = true
        this.errorMessage = ''
      },
      error: (err: Error) => {
        this.albums = undefined
        this.loadingComplete = true
        this.errorMessage = err.message
      },
      complete: () => { }
    })

  }
}
