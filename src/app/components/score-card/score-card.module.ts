import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FullScoreCardComponent } from './full-score-card/full-score-card.component';
import { BattingTableComponent } from './batting-table/batting-table.component';
import { BowlingTableComponent } from './bowling-table/bowling-table.component';
import { MiniScoreCardComponent } from './mini-score-card/mini-score-card.component';
import { CommentaryContainerComponent } from './commentary-container/commentary-container.component';
import { CommentaryCardComponent } from './commentary-card/commentary-card.component';
import { InningsCommentaryComponent } from './innings-commentary/innings-commentary.component';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatDialogModule, MatTabsModule, MatTableModule, MatProgressSpinnerModule, MatSlideToggleModule, MatSidenavModule, MatListModule } from '@angular/material';
import { CommentaryTextPipe } from '../pipe/commentary-text.pipe';
import { RunsWicketsDeclaredPipe } from '../pipe/runs-wickets-declared/runs-wickets-declared.pipe';
import { CommentaryHeaderPipe } from '../pipe/commentary-header.pipe';
import { MatchTimePipe } from '../pipe/match-time.pipe';
import { GameStatusComponent } from './game-status/game-status.component';
import { InningsScoreCardComponent } from './innings-score-card/innings-score-card.component';
import { InningGraphComponent } from './inning-graph/inning-graph.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'scoreCard',
        component: FullScoreCardComponent
      }
    ]),
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    ChartsModule
  ],
  entryComponents: [FullScoreCardComponent],
  declarations: [
    BattingTableComponent,
    BowlingTableComponent,
    FullScoreCardComponent,
    MiniScoreCardComponent,
    CommentaryContainerComponent,
    CommentaryCardComponent,
    InningsCommentaryComponent,
    GameStatusComponent,
    InningsScoreCardComponent,
    InningGraphComponent,
    RunsWicketsDeclaredPipe,
    CommentaryHeaderPipe,
    CommentaryTextPipe,
    MatchTimePipe,
  ],
  exports: [
    BattingTableComponent,
    BowlingTableComponent,
    FullScoreCardComponent,
    MiniScoreCardComponent,
    CommentaryContainerComponent,
    CommentaryCardComponent,
    InningsCommentaryComponent,
    GameStatusComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ScoreCardModule { }
