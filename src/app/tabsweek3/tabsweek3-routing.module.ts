import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabsweek3Page } from './tabsweek3.page';

const routes: Routes = [
  // {
  //   path: 'tabs',
  //   component: Tabsweek3Page,
  //   children: [
  //     { path: '', loadChildren: () => import('./song/song.module').then( m => m.SongPageModule)},
  //     { path: 'song', loadChildren: ()=> import('./song/song.module').then( m => m.SongPageModule)},
  //     { path: 'singer', loadChildren: () => import('./singer/singer.module').then( m => m.SingerPageModule)},
  //     { path: 'album', loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)}
  //   ]
  // },
  {
    path: 'tabsweek3',
    component: Tabsweek3Page,
    children: [
      {path: 'list-product', loadChildren: ()=> import('./list-product/list-product.module').then( m => m.ListProductPageModule)},
      { path: 'deltail', loadChildren: () => import('./deltails/deltails.module').then( m => m.DeltailsPageModule)},
      { path: ' ', loadChildren: () => import('./list-product/list-product.module').then( m => m.ListProductPageModule)}
    ]
  },

  // {
  //   path: 'tabs',
  //   component: TabsPage,
  //   children: [
  //     { path: '', loadChildren: () => import('./song/song.module').then( m => m.SongPageModule)},
  //     { path: 'song', loadChildren: ()=> import('./song/song.module').then( m => m.SongPageModule)},
  //     { path: 'singer', loadChildren: () => import('./singer/singer.module').then( m => m.SingerPageModule)},
  //     { path: 'album', loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)}
  //   ]
  // },
  {
    path: '',
    redirectTo: '/tabsweek3/list-product',
    pathMatch: 'full'
  }
  // {
  //   path: 'list-product',
  //   loadChildren: () => import('./list-product/list-product.module').then( m => m.ListProductPageModule)
  // },
  // {
  //   path: 'deltails',
  //   loadChildren: () => import('./deltails/deltails.module').then( m => m.DeltailsPageModule)
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabsweek3PageRoutingModule {}
