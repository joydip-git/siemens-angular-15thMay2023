import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumService } from './services/album.service';
import { ALBUM_SERVICE_TOKEN, ALBUM_SERVICE_TYPE } from '../constants/appconstants';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  declarations: [
    AlbumListComponent, FilterProductPipe, AlbumDetailComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule, AlbumsRoutingModule
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
