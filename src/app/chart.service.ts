import { Injectable } from '@angular/core';
import c3 from 'c3';

@Injectable()
export class ChartService {

  constructor() {
  }

  generateChart(element: any, data: any): any {
    let chartData = {
      bindto: element,
      data: {
        x: 'x',
        columns: [
          data.periods,
          data.steps
        ],
        type: 'area',
        colors: {
          'Daily steps': '#00b4d9'
        }
      },
      axis: {
        x: {
          type: 'timeseries',
          // The format the data is in
          format: '%Y-%m-%d'
        }
      },
      legend: {
        show: false
      },
      size: {
        height: 200
      },
      padding: {
        right: 20
      }
    };
    // If none of the step counts were greater than the goal, then we have to
    // set a max value for the y axis so that the 'My goal' grid line is not hidden
    if (data.goal && data.goalExceeded === false) {
      chartData.axis['y'] = {
        max: data.goal
      };
    }
    let chart = c3.generate(chartData);

    let yGrids = [];
    if (data.goal) {
      yGrids.push({value: data.goal, text: 'My goal', class: 'goal-grid-line'})
    }
    if (data.averageDailySteps) {
      yGrids.push({value: data.averageDailySteps, text: 'My average', class: 'average-grid-line'})
    }
    chart.ygrids(yGrids);
    return chart;
  }
}
