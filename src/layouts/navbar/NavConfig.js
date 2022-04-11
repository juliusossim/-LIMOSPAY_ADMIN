// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Label from '../../components/Label';
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  payment: getIcon('ic_payment'),
  wallet: getIcon('ic_wallet'),
  notifications: getIcon('ic_notifications'),
  profile: getIcon('ic_profile'),
  support: getIcon('ic_support'),
  settings: getIcon('ic_settings'),
  logout: getIcon('ic_logout'),
};

const navConfig = [
  {
    subheader: 'customer',
    items: [
      { title: 'dashboard', path: PATH_DASHBOARD.customer.dashboard, icon: ICONS.dashboard },
      { title: 'payment', path: PATH_DASHBOARD.customer.payment, icon: ICONS.payment },
      { title: 'wallet', path: PATH_DASHBOARD.customer.wallet, icon: ICONS.wallet },
      { title: 'notifications', path: PATH_DASHBOARD.customer.notifications, icon: ICONS.notifications },
      { title: 'profile', path: PATH_DASHBOARD.customer.profile, icon: ICONS.profile },
      { title: 'support', path: PATH_DASHBOARD.customer.support, icon: ICONS.support },
      { title: 'settings', path: PATH_DASHBOARD.customer.settings, icon: ICONS.settings },
      // { title: 'logout', path: PATH_DASHBOARD.customer.settings, icon: ICONS.logout },
    ],
  }
];

export default navConfig;
