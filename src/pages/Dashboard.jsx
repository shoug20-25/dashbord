import { useEffect } from 'react';
import Chart from 'react-apexcharts';

function Dashboard() {
  useEffect(() => {
    console.log('تم تحميل لوحة التحكم');
  }, []);
  const lineChartOptions = {
    chart: {
      toolbar: { show: false },
    },
    xaxis: {
      categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
  };

  const lineChartSeries = [
  {
    name: 'التذاكر',
    data: [20, 35, 28, 50, 42, 65],
  },
];

  const barChartOptions = {
    chart: {
      toolbar: { show: false },
    },
    xaxis: {
      categories: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const barChartSeries = [
  {
    name: 'التذاكر',
    data: [12, 19, 15, 25, 22],
  },
];

  return (
    <main>
      <h1>لوحة التحكم</h1>
      <p>مرحبًا بك في لوحة التحكم الخاصة بك!</p>

      <section className="stats-container">
        <div className="stat-card">
         <h3>إجمالي التذاكر</h3>
          <p>320</p>
        </div>

        <div className="stat-card">
           <h3>التذاكر المفتوحة</h3>
            <p>85</p>
          </div>

            <div className="stat-card">
             <h3>التذاكر المغلقة</h3>
              <p>235</p>
             </div>
      </section>

      <section className="charts-container">
        <div className="chart-card">
          <h2>التذاكر خلال الأشهر</h2>
          <Chart
            options={lineChartOptions}
            series={lineChartSeries}
            type="line"
            height={280}
          />
        </div>

        <div className="chart-card">
          <h2>التذاكر خلال الأسبوع</h2>
          <Chart
            options={barChartOptions}
            series={barChartSeries}
            type="bar"
            height={280}
          />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

