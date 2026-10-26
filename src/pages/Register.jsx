import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('يرجى تعبئة جميع الحقول');
      return;
    }

    if (password !== confirmPassword) {
      setError('كلمتا المرور غير متطابقتين');
      return;
    }

    setLoading(true);
    localStorage.setItem('token', 'demo-token');
    navigate('/dashboard');
  }

  return (
  <main className="auth-card">
    <img
      src="/logo.png"
      alt="شعار الدعم الفني"
      className="auth-logo"
    />

    <h1>إنشاء حساب</h1>

      
      <p>أنشئي حسابك للوصول إلى لوحة التحكم</p>

      <form onSubmit={handleSubmit}>
        <Input
          label="الاسم"
          name="name"
          placeholder="أدخل اسمك"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Input
          label="البريد الإلكتروني"
          name="email"
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          label="كلمة المرور"
          name="password"
          type="password"
          placeholder="أدخل كلمة المرور"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Input
          label="تأكيد كلمة المرور"
          name="confirmPassword"
          type="password"
          placeholder="أعيدي إدخال كلمة المرور"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        {error && <p className="input-error">{error}</p>}

        <Button type="submit" loading={loading}>
          إنشاء حساب
        </Button>
      </form>

      <p>
        لديك حساب بالفعل؟ <Link to="/">تسجيل الدخول</Link>
      </p>
    </main>
  );
}

export default Register;