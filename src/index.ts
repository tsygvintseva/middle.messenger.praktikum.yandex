import './scss/styles.scss';
import { render } from './utils/renderDOM';
import { Login } from './pages/auth/login/login';
import { Registration } from './pages/auth/registration/registration';
import { Chats } from './pages/chats/chats';
import { Profile } from './pages/profile/profile';
import { ProfileUpdatePassword } from './pages/profile/profile-update-password/profile-update-password';
import { Error404 } from './pages/error/error-404/error-404';
import { Error500 } from './pages/error/error-500/error-500';
import { LOGIN_FORM_PROPS } from './pages/auth/login/login.data';
import { REGISTRATION_FORM_PROPS } from './pages/auth/registration/registration.data';
import { CHATS_PROPS } from './pages/chats/chats.data';
import { PROFILE_PROPS } from './pages/profile/profile.data';
import { PROFILE_PASSWORD_DATA } from './pages/profile/profile-update-password/profile-update-password.data';
import { ERROR_404_PROPS } from './pages/error/error-404/error-404.data';
import { ERROR_500_PROPS } from './pages/error/error-500/error-500.data';

const root: string = '#root';

window.addEventListener('hashchange', () => {
  const currentURL = location.hash;

  switch (currentURL) {
    case '#login':
      render(root, new Login(LOGIN_FORM_PROPS))
      break
    case '#registration':
      render(root, new Registration(REGISTRATION_FORM_PROPS))
      break
    case '#chats':
      render(root, new Chats(CHATS_PROPS))
      break
    case '#profile':
      render(root, new Profile(PROFILE_PROPS))
      break
    case '#profile-update-password':
      render(root, new ProfileUpdatePassword(PROFILE_PASSWORD_DATA))
      break
    case '#error404':
      render(root, new Error404(ERROR_404_PROPS))
      break
    case '#error500':
      render(root, new Error500(ERROR_500_PROPS))
      break
    default:
      render(root, new Error404(ERROR_404_PROPS))
      break
  }
});
