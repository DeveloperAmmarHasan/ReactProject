const menus = [
  {
    label: 'Home',
    to: '/',
    children: [],
  },
  {
    label: 'Profile',
    to: '/profile',
    children: [
      {
        label: 'Details',
        to: '/profile/details',
        children: [
          {
            label: 'Location',
            to: '/profile/details/location',
            children: [
              {
                label: 'City',
                to: '/profile/details/location/city',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Settings',
    to: '/settings',
    children: [
      {
        label: 'Account',
        to: '/settings/account',
        children: [],
      },
      {
        label: 'Security',
        to: '/settings/security',
        children: [
          {
            label: 'Login',
            to: '/settings/security/login',
            children: [],
          },
          {
            label: 'Register',
            to: '/settings/security/register',
            children: [
              {
                label: 'Random Data',
                to: '/settings/security/register/random-data',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export default menus;
