import styles from './Home.module.css';
function Home() {
  const tickets = [
    {
      id: 128,
      title: 'تعديل بيانات الحساب',
      status: 'قيد المعالجة',
      time: 'منذ 30 د',
    },
    {
      id: 125,
      title: 'الدخول للنظام لا يعمل',
      status: 'تمت المعالجة',
      time: 'منذ 4 أيام',
    },
    {
      id: 100,
      title: 'مشكلة في رفع الملفات',
      status: 'تمت المعالجة',
      time: 'منذ أسبوع',
    },
  ];

  return (
    <main className={styles["home-page"]}>
      <section className={styles["home-welcome"]}>
        <h1>مرحبًا بك شوق 👋</h1>
      </section>

      <section className={styles["subscription-card"]}>
        <div>
          <h2>اشتراكي: نظام ماتريكس</h2>
          <p>ينتهي خلال: 2026-12-12</p>
        </div>
        <span className={styles["subscription-status"]} >ساري</span>
      </section>

      <section className={styles["ticket-summary"]}>
        <article className={styles["ticket-summary-card"]}>
          <span className={styles["ticket-icon"] + ' ' + styles["open-icon"]}>▤</span>
          <div>
            <h3>تذاكر مفتوحة</h3>
            <p>1</p>
          </div>
        </article>

        <article className={styles['ticket-summary-card']}>
          <span className={`${styles['ticket-icon']} ${styles['closed-icon']}`}>
             ▣
          </span>
          <div>
            <h3>تذاكر مغلقة</h3>
            <p>2</p>
          </div>
        </article>
      </section>

      <section className={styles["latest-tickets"]}>
        <div className={styles["latest-tickets-header"]}>
          <h2>آخر التحديثات</h2>
          <button type="button" className={styles["view-tickets-button"]}>
            عرض جميع التذاكر
          </button>
        </div>

        {tickets.map((ticket) => (
          <article className={styles["latest-ticket"]} key={ticket.id}>
            <div className={styles["ticket-details"]}>
              <h3>
                {ticket.title} <span>#{ticket.id}</span>
              </h3>
              <p>تم تحديث الحالة بنجاح</p>
            </div>

            <span
              className={`${styles['ticket-status']} ${
                    ticket.status === 'قيد المعالجة'
                   ? styles.processing
                   : styles.resolved
                     }`}
            >
              {ticket.status}
            </span>

            <span className={styles['ticket-time']}>{ticket.time}</span>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Home;
