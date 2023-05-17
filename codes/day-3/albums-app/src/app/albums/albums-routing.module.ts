import { RouterModule, Routes } from "@angular/router";
import { AlbumListComponent } from "./components/album-list/album-list.component";
import { AlbumDetailComponent } from "./components/album-detail/album-detail.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{
    path: 'albums-list',
    component: AlbumListComponent
}, {
    path: 'albums-list/:id',
    component: AlbumDetailComponent
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AlbumsRoutingModule {

}