import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumService } from './services/album.service';
import { ALBUM_SERVICE_TOKEN, ALBUM_SERVICE_TYPE } from '../constants/appconstants';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AlbumListComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  //providers: [AlbumService],
  providers: [
    {
      provide: ALBUM_SERVICE_TOKEN,
      useClass: ALBUM_SERVICE_TYPE
    }
  ],
  exports: [AlbumListComponent]
})
export class AlbumsModule { }
