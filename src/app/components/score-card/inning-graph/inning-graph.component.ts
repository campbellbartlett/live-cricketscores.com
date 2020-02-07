import {Component, Input, OnInit} from '@angular/core';
import {CricketDataService} from '../../../services/cricket-data.service';
import {ChartDataSets} from 'chart.js';

@Component({
  selector: 'app-inning-graph',
  templateUrl: './inning-graph.component.html',
  styleUrls: ['./inning-graph.component.scss'],
})
export class InningGraphComponent implements OnInit {
  @Input() matchId: number;
  @Input() seriesId: number;

  manhattanChart = {
    data: [
      {data: [], label: 'Runs/Overs'},
    ],
    labels: [],
    options: {
      tooltips: {
        enabled: true,
        displayColors: false,
        callbacks: {
          title: (tooltipItem, data) => data.datasets[tooltipItem[0].datasetIndex].label,
          label: (tooltipItem, data) => `Runs: ${tooltipItem.yLabel} \n Over: ${tooltipItem.xLabel}`
        }
      }
    }
  };

  constructor(private cricketDataService: CricketDataService) {
  }

  ngOnInit() {
    if (this.matchId && this.seriesId) {
      this.cricketDataService.getGraphForMatchSeries(this.matchId, this.seriesId)
        .then(response => {
          this.manhattanChart.data = response.graph.innings.map(inning => {
            const team = response.graph.awayTeam.id === inning.battingTeamId ? response.graph.awayTeam : response.graph.homeTeam;
            return {data: inning.overs.map(o => Number(o.run)), label: team.shortName};
          });

          this.manhattanChart.labels = response.graph.innings
            .map(inning => inning.overs.map(o => o.overId))
            .reduce((acc, labelList) => labelList.length > acc.length ? labelList : acc, []);
        });
    }
  }
}
