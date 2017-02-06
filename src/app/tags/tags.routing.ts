import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TagListComponent } from './tag-list';
import { TagViewComponent } from './tag-view';

const routes: Routes = [
    {
        path: 'tags',
        component: TagListComponent
    },
    {
        path: 'tags/:tagName',
        component: TagViewComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class TagsRoutingModule {}
