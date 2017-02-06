import { NgModule } from '@angular/core';

import { PastesService } from './services/pastes.service';
import { TagsService } from './services/tags.service';
// import { PasteViewComponent } from './components/paste-view/paste-view.component';

@NgModule({
    providers: [
        PastesService,
        TagsService
    ],
    declarations: [
        // PasteViewComponent
    ],
    exports: [
        // PasteViewComponent
    ]
})

export class CommonModule {}
