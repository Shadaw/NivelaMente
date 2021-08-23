import { useCallback } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from 'hooks/auth';

import { Dropdown } from 'components/Dropdown';
import { UserIcon } from 'components/UserIcon';
import { Button } from 'components/Button';

export const LoginButton = () => {
  const routes = useRouter();
  const { user } = useAuth();

  const handleRedirectToLogin = useCallback(() => {
    routes.push('/login');
  }, [routes]);

  return user ? (
    <Dropdown>
      <UserIcon name={user.name} />
    </Dropdown>
  ) : (
    <Button radius onClick={handleRedirectToLogin}>
      Login
    </Button>
  );
};
