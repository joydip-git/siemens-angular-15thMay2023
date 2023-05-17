import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ALBUM_SERVICE_TOKEN } from 'src/app/constants/appconstants';
import { IAlbumService } from '../../services/album.service';
import { Subscription } from 'rxjs';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit, OnDestroy {
  private albumSub?: Subscription;
  album?: Album;
  loadingComplete = false
  errorMessage = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(ALBUM_SERVICE_TOKEN) private svc: IAlbumService
  ) {

  }
  ngOnDestroy(): void {
    this.albumSub?.unsubscribe()
  }
  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot
    const id = +snapshot.params['id']
    //console.log(id)
    this.svc.getAlbum(id).subscribe({
      next: (alb: Album) => {
        this.album = alb
        this.loadingComplete = true
        this.errorMessage = ''
      },
      error: (err: Error) => {
        this.album = undefined
        this.loadingComplete = true
        this.errorMessage = err.message
      }
    })
  }
  goBack() {
    this.router.navigate(['/albums-list'])
  }
}
