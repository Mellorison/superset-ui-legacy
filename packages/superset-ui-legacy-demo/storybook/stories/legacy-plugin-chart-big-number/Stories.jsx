/* eslint-disable no-magic-numbers, sort-keys */
import React from 'react';
import { SuperChart } from '@superset-ui/chart';

export default [
  {
    renderStory: () => (
      <SuperChart
        chartType="big-number"
        chartProps={{
          formData: {
            colorPicker: {
              r: 0,
              g: 122,
              b: 135,
              a: 1,
            },
            compareLag: 1,
            compareSuffix: 'over 10Y',
            metric: 'sum__SP_POP_TOTL',
            showTrendLine: true,
            startYAxisAtZero: true,
            vizType: 'big_number',
            yAxisFormat: '.3s',
          },
          height: 400,
          payload: {
            data: [
              {
                __timestamp: 1388534400000.0,
                sum__SP_POP_TOTL: 7237260256.0,
              },
              {
                __timestamp: 1356998400000.0,
                sum__SP_POP_TOTL: 7151135481.0,
              },
              {
                __timestamp: 1325376000000.0,
                sum__SP_POP_TOTL: 7066007165.0,
              },
              {
                __timestamp: 1293840000000.0,
                sum__SP_POP_TOTL: 6984252419.0,
              },
              {
                __timestamp: 1262304000000.0,
                sum__SP_POP_TOTL: 6901110512.0,
              },
              {
                __timestamp: 1230768000000.0,
                sum__SP_POP_TOTL: 6818457192.0,
              },
              {
                __timestamp: 1199145600000.0,
                sum__SP_POP_TOTL: 6735914031.0,
              },
              {
                __timestamp: 1167609600000.0,
                sum__SP_POP_TOTL: 6653571302.0,
              },
              {
                __timestamp: 1136073600000.0,
                sum__SP_POP_TOTL: 6572596462.0,
              },
              {
                __timestamp: 1104537600000.0,
                sum__SP_POP_TOTL: 6491857539.0,
              },
              {
                __timestamp: 1072915200000.0,
                sum__SP_POP_TOTL: 6411615629.0,
              },
              {
                __timestamp: 1041379200000.0,
                sum__SP_POP_TOTL: 6331766837.0,
              },
              {
                __timestamp: 1009843200000.0,
                sum__SP_POP_TOTL: 6252469127.0,
              },
              {
                __timestamp: 978307200000.0,
                sum__SP_POP_TOTL: 6173339411.0,
              },
            ],
          },
          width: 400,
        }}
      />
    ),
    storyName: 'BigNumberChartPlugin',
    storyPath: 'plugin-chart-big-number',
  },
];
