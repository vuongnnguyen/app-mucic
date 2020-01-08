import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: '', loadChildren: () => import('./song/song.module').then( m => m.SongPageModule)},
      { path: 'song', loadChildren: ()=> import('./song/song.module').then( m => m.SongPageModule)},
      { path: 'singer', loadChildren: () => import('./singer/singer.module').then( m => m.SingerPageModule)},
      { path: 'album', loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)}
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/song',
    pathMatch: 'full'
  }
  // {
  //   path: '',
  //   component: TabsPage
  // },
  // {
  //   path: 'song',
  //   loadChildren: () => import('./song/song.module').then( m => m.SongPageModule)
  // },
  // {
  //   path: 'singer',
  //   loadChildren: () => import('./singer/singer.module').then( m => m.SingerPageModule)
  // },
  // {
  //   path: 'album',
  //   loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
