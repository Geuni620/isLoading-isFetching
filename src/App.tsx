import { Dashboard } from '@/components/dashboard';
import { Login } from '@/components/login';
import { useLogin } from '@/hooks/useLogin';

export const App = () => {
  const { session, onLoginClick } = useLogin();

  if (!session)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Login onClick={onLoginClick} />
      </div>
    );

  return <Dashboard />;
};
