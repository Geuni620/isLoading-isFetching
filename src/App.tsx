import { useEffect } from 'react';
import { Login } from '@/components/login';
import { useLogin } from '@/hooks/useLogin';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const navigate = useNavigate();
  const { session, onLoginClick } = useLogin();

  useEffect(() => {
    if (session) {
      navigate('/home');
    }
  }, [session, navigate]);

  if (!session)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Login onClick={onLoginClick} />
      </div>
    );

  return null;
};
