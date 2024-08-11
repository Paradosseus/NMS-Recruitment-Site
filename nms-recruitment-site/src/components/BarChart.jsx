import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {

  const randomData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));


  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Random Data',
        data: randomData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    aspectRatio: 2,
    plugins: {
      legend: {
        position: 'top',
        align: 'end', // Align the legend to the right end
      },
      title: {
        display: true,
        text: 'Weekly Random Data',
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <div style={{ width: '40%', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
