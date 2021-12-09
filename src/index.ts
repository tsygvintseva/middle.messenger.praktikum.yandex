import './scss/styles.scss';
import { render } from './utils/renderDOM';
import { Login } from './pages/auth/login/login';
import { Registration } from './pages/auth/registration/registration';
import { Chats } from './pages/chats/chats';
import { Error404 } from './pages/error/error-404/error-404';
import { Error500 } from './pages/error/error-500/error-500';
import { Profile } from './pages/profile/profile';
import { ProfileUpdatePassword } from './pages/profile/profile-update-password/profile-update-password';

const root: string = '#root';

window.addEventListener('hashchange', () => {
  const currentURL = location.hash;

  switch (currentURL) {
    case '#login':
      render(root, new Login())
      break
    case '#registration':
      render(root, new Registration())
      break
    case '#chats':
      render(root, new Chats())
      break
    case '#profile':
      render(root, new Profile())
      break
    case '#profile-update-password':
      render(root, new ProfileUpdatePassword())
      break
    case '#error404':
      render(root, new Error404())
      break
    case '#error500':
      render(root, new Error500())
      break
    default:
      render(root, new Error404())
      break
  }
});
