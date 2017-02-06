import { NgModule } from '@angular/core';

import { PastesService } from './services/pastes.service';
import { TagsService } from './services/tags.service';

@NgModule({
    providers: [
        PastesService,
        TagsService
    ]
})

export class CommonModule {}
