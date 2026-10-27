import styles from './Login.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      setError('يرجى إدخال البريد الإلكتروني وكلمة المرور');
      return;
    }

    setLoading(true);

    localStorage.setItem('token', 'demo-token');

    navigate('/dashboard');
  }

  return (
    <main className={styles['auth-card']}>
    <img
      src="/logo.png"
      alt="شعار الدعم الفني"
      className={styles['auth-logo']}
    />
      <h1>تسجيل الدخول</h1>
      <p>مرحبًا بك في لوحة التحكم</p>

      <form onSubmit={handleSubmit}>
        <Input
          label="البريد الإلكتروني"
          name="email"
          type="email"
          placeholder="أدخلي بريدك الإلكتروني"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          label="كلمة المرور"
          name="password"
          type="password"
          placeholder="أدخلي كلمة المرور"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {error && <p className={styles['input-error']}>{error}</p>}

        <Button type="submit" loading={loading}>
          تسجيل الدخول
        </Button>
      </form>

      <p>
        ليس لديك حساب؟ <Link to="/register">إنشاء حساب</Link>
      </p>
    </main>
  );
}

export default Login;