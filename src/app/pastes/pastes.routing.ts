import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PasteListPageComponent } from './paste-list/paste-list-page.component';
import { PasteViewPageComponent } from './paste-view/paste-view-page.component';

const routes: Routes = [
    {
        path: '',
        component: PasteListPageComponent
    },
    {
        path: 'paste/:hashId',
        component: PasteViewPageComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class PastesRoutingModule {}
