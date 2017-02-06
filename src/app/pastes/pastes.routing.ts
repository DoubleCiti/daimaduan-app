import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PasteListComponent } from './paste-list';
import { PasteViewComponent } from './paste-view';

const routes: Routes = [
    {
        path: '',
        component: PasteListComponent
    },
    {
        path: 'pastes/:hashId',
        component: PasteViewComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class PastesRoutingModule {}
