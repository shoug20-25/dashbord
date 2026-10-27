import styles from './Dashboard.module.css';
import { useEffect } from 'react';
import Chart from 'react-apexcharts';

function Dashboard() {
  useEffect(() => {
    console.log('تم تحميل لوحة التحكم');
  }, []);

const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  xaxis: {
    categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
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
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
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

      <section className={styles['stats-container']}>
        <div className={styles['stat-card']}>
         <h3>إجمالي التذاكر</h3>
          <p>320</p>
        </div>

        <div className={styles['stat-card']}>
           <h3>التذاكر المفتوحة</h3>
            <p>85</p>
          </div>

            <div className={styles['stat-card']}>
             <h3>التذاكر المغلقة</h3>
              <p>235</p>
             </div>
      </section>

      <section className={styles['charts-container']}>
        <div className={styles['chart-card']}>
          <h2>التذاكر خلال الأشهر</h2>
          <Chart
            options={lineChartOptions}
            series={lineChartSeries}
            type="line"
            height={280}
          />
        </div>

        <div className={styles['chart-card']}>
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

