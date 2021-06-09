import React from 'react';
import { Wrap } from '../../styles/Wrap';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

export const Lessons = () => {
    const { openedLessonsCount, completedLessonsCount, totalLessonsCount } = useSelector(({ userReducer }) => userReducer)
    const data = {
        labels: ['Opened', 'Completed', 'Total'],
        datasets: [
          {
            label: false,
            data: [openedLessonsCount, completedLessonsCount, totalLessonsCount],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        scale: {
          ticks: {
            precision:0
          }
        },
        plugins: {
          legend: {
            display: false,
            position: 'right',
          },
          title: {
            display: true,
            text: 'Lessons statistic',
          },
        },
      };
    return (
        <Wrap width='35vw' direction='column' justicy='center' align='center' padding='0 0 20px 0'>
            <Bar data={data} options={options} />
        </Wrap>
    )
}