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
    <main className="home-page">
      <section className="home-welcome">
        <h1>مرحبًا بك شوق 👋</h1>
      </section>

      <section className="subscription-card">
        <div>
          <h2>اشتراكي: نظام ماتريكس</h2>
          <p>ينتهي خلال: 2026-12-12</p>
        </div>
        <span className="subscription-status">ساري</span>
      </section>

      <section className="ticket-summary">
        <article className="ticket-summary-card">
          <span className="ticket-icon open-icon">▤</span>
          <div>
            <h3>تذاكر مفتوحة</h3>
            <p>1</p>
          </div>
        </article>

        <article className="ticket-summary-card">
          <span className="ticket-icon closed-icon">▣</span>
          <div>
            <h3>تذاكر مغلقة</h3>
            <p>2</p>
          </div>
        </article>
      </section>

      <section className="latest-tickets">
        <div className="latest-tickets-header">
          <h2>آخر التحديثات</h2>
          <button type="button" className="view-tickets-button">
            عرض جميع التذاكر
          </button>
        </div>

        {tickets.map((ticket) => (
          <article className="latest-ticket" key={ticket.id}>
            <div className="ticket-details">
              <h3>
                {ticket.title} <span>#{ticket.id}</span>
              </h3>
              <p>تم تحديث الحالة بنجاح</p>
            </div>

            <span
              className={`ticket-status ${
                ticket.status === 'قيد المعالجة' ? 'processing' : 'resolved'
              }`}
            >
              {ticket.status}
            </span>

            <span className="ticket-time">{ticket.time}</span>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Home;
