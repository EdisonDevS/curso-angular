import { CharactersRoutingModule } from './characters-routing.module';
;
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';


@NgModule({
  declarations: [
    CharacterDetailComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
