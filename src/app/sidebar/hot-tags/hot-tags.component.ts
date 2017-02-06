import { Component, OnInit } from '@angular/core';

import { Tag } from '../../common/models';
import { TagsService } from '../../common/services/tags.service';

@Component({
  selector: 'sidebar-hot-tags',
  templateUrl: './hot-tags.component.html',
  styleUrls: ['./hot-tags.component.css']
})

export class HotTagsComponent implements OnInit {
  tags: Tag [] = [];

  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {
    this.tagsService.getAllTags()
    .then(tags => {
      this.tags = tags;
    });
  }

}
