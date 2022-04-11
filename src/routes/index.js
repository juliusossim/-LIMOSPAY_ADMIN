import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import CustomerLayout from '../layouts/customer';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// config
import { PATH_AFTER_LOGIN } from '../config';
// components
import LoadingScreen from '../components/LoadingScreen';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },

    // Customer Routes
    {
      path: '',
      element: (
        <AuthGuard>
          <CustomerLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'dashboard', element: <CustomerDashboard /> },
        { path: 'payment', element: <CustomerPayment /> },
        { path: 'transaction/:id', element: <CustomerTransaction /> },
        { path: 'wallet', element: <CustomerWallet /> },
        { path: 'notifications', element: <CustomerNotifications /> },
        { path: 'notification/:id', element: <CustomerNotification /> },
        { path: 'profile', element: <Profile /> },
        { path: 'settings', element: <Page title="Settings" /> },
        { path: 'support', element: <CustomerSupport /> },
        { path: 'support/:page', element: <CustomerSupport /> },
      ]
    },


    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));

// CUSTOMER
const CustomerDashboard = Loadable(lazy(() => import('../pages/customer/Dashboard')));
const CustomerPayment = Loadable(lazy(() => import('../pages/customer/Payment')));
const CustomerWallet = Loadable(lazy(() => import('../pages/customer/Wallet')));
const CustomerNotifications = Loadable(lazy(() => import('../pages/customer/Notifications')));
const CustomerSupport = Loadable(lazy(() => import('../pages/customer/Support')));
const CustomerTransaction = Loadable(lazy(() => import('../pages/customer/Transaction')));
const CustomerNotification = Loadable(lazy(() => import('../pages/customer/Notification')));
const Profile = Loadable(lazy(() => import('../pages/customer/profile/Profile')));


// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const About = Loadable(lazy(() => import('../pages/About')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
const Payment = Loadable(lazy(() => import('../pages/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
