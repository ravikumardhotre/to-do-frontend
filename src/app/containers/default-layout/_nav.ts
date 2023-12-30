import { INavData } from '@coreui/angular';

export const SuperadminNavItems: INavData[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    name: 'Super Admin',
  },
  {
    name:'to-do-list',
    url:'/to-do-list',
    iconComponent:{name:'cil-list'},
  },
  // {
  //   name:'allbook',
  //   url:'/allbook',
  //   iconComponent:{name:'cil-list'},
  // },
  {
    name: 'User',
    url: '/user',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Create User',
        url: '/create-user',
        // iconComponent: { name: 'cil-user-follow' },
        // access: 'Superadmin'
      },
      {
        name: 'Update User',
        url: '/update-user',
        // iconComponent: { name: 'cil-user-follow' },
        // access: 'Superadmin'
      },
    ]
  },
  
  // {
  //   name: 'Update Password',
  //   url: '/update-password',
  //   iconComponent: { name: 'cil-pencil' }
  // },


  // {
  //   name: 'Logout',
  //   url: '/logout',
  //   // iconComponent: { name: 'cil-account-logout' }
  // },
];

export const UserNavItems: INavData[] = [

  {
    name:'to-do-list',
    url:'/to-do-list',
    iconComponent:{name:'cil-list'},
  },
]

export const HiringManagerNavItems: INavData[] = [

  // {
  //   name: 'Hiring Manager',
  // },
  // {
  //   name: 'Position',
  //   url: '/Position',
  //   iconComponent: { name: 'cil-list' },
  //   children: [
  //     {
  //       name: ' Create Position',
  //       url: '/create-position',
  //       // iconComponent: { name: 'cil-pen' }
  //     },
  //     {
  //       name: 'Positions',
  //       url: '/position-list',
  //       // iconComponent: { name: 'cil-list' }
  //     },
  //     {
  //       name: 'Approved Reject Positions',
  //       url: '/approved-position-list',
  //       // iconComponent: { name: 'cil-list' }
  //     }

  //   ]
  // },

  // {
  //   name: 'Candidate',
  //   url: '/candidate',
  //   iconComponent: { name: 'cil-pen' },
  //   children: [
  //     {
  //       name: 'Candidate CV list',
  //       url: '/candidate-cv-verification',
  //       // iconComponent: { name: 'cil-list' }
  //     },
  //     {
  //       name: 'View candidate',
  //       url: '/view-candidate',
  //       // iconComponent: { name: 'cilUser' }
  //     },

  //   ]
  // },

  // {
  //   name: 'Update Password',
  //   url: '/update-password',
  //   iconComponent: { name: 'cil-pencil' }
  // },

  // {
  //   name: 'Logout',
  //   url: '/logout',
  //   // iconComponent: { name: 'cil-account-logout' }
  // },
];

export const HRNavItems: INavData[] = [

  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   name: 'HR Manager',
  // },
  // {
  //   name: 'Department',
  //   url: '/department',
  //   iconComponent: { name: 'cilCursor' }
  // },
  // {
  //   name: 'Designation',
  //   url: '/designation',
  //   iconComponent: { name: 'cilStar' }
  // },


  // {
  //   name: 'Candidate',
  //   url: '/candidate',
  //   iconComponent: { name: 'cil-user' },
  //   children: [
  //     {
  //       name: 'View candidate',
  //       url: '/view-candidate',
  //       // iconComponent: { name: 'cilUser' }
  //     },
  //     {
  //       name: 'Eval Completed',
  //       url: '/eval-completed-candidate',
  //       // iconComponent: { name: 'cil-list' }
  //     },
  //     {
  //       name: 'All candidates List',
  //       url: '/candidate-list',
  //       // iconComponent: { name: 'cilUser' }
  //     },
      // {
      //   name: ' Approved Candidates',
      //   url: '/approved-list',
      //   iconComponent: { name: 'cil-list' }
      // },
      // {
      //   name: 'Reject Candidates',
      //   url: '/rejected-candidates-list',
      //   iconComponent: { name: 'cil-list' }
      // },
      // {
      //   name: 'Onbording Candidates',
      //   url: '/onbording-list',
      //   // iconComponent: { name: 'cil-list' }
      // },
    ]
  // },

  // {
  //   name: 'Update Password',
  //   url: '/update-password',
  //   iconComponent: { name: 'cil-pencil' }
  // },


  // {
  //   name: 'Position',
  //   url: '/Position',
  //   iconComponent: { name: 'cil-list' },
  //   children: [
  //     {
  //       name: 'All Positions list',
  //       url: '/all-position-list',
  //       // iconComponent: { name: 'cil-list' }
  //     },
  //     {
  //       name: ' Assign Positions',
  //       url: '/assign-position-list',
  //       // iconComponent: { name: 'cil-list' }
  //     },

  //   ]
  // },

  // {
  //   name: 'Logout',
  //   url: '/logout',
  //   // iconComponent: { name: 'cil-account-logout' }
  // },



export const HR2NavItems: INavData[] = [

  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
//   {
//     name: 'Talent Acquisition Lead',
//   },
//   {
//     name: 'Candidate',
//     url: '/candidate',
//     iconComponent: { name: 'cil-user' },
//     children: [
//       {
//         name: 'View candidate',
//         url: '/view-candidate',
//         // iconComponent: { name: 'cilUser' }
//       },
//       {
//         name: 'Eval Completed',
//         url: '/eval-completed-candidate',
//         // iconComponent: { name: 'cil-list' }
//       },
//       {
//         name: 'All candidates List',
//         url: '/candidate-list',
//         // iconComponent: { name: 'cilUser' }
//       },
//       // {
//       //   name: ' Approved Candidates',
//       //   url: '/approved-list',
//       //   iconComponent: { name: 'cil-list' }
//       // },
//       // {
//       //   name: 'Reject Candidates',
//       //   url: '/rejected-candidates-list',
//       //   iconComponent: { name: 'cil-list' }
//       // },
//       {
//         name: 'Onbording Candidates',
//         url: '/onbording-list',
//         // iconComponent: { name: 'cil-list' }
//       },
//     ]
//   },

//   // {
//   //   name: 'Update Password',
//   //   url: '/update-password',
//   //   iconComponent: { name: 'cil-pencil' }
//   // },


//   {
//     name: 'Position',
//     url: '/Position',
//     iconComponent: { name: 'cil-list' },
//     children: [
//       {
//         name: 'All Positions list',
//         url: '/all-position-list',
//         // iconComponent: { name: 'cil-list' }
//       },
//       {
//         name: ' Assign Positions',
//         url: '/assign-position-list',
//         // iconComponent: { name: 'cil-list' }
//       },

//     ]
//   },

//   // {
//   //   name: 'Logout',
//   //   url: '/logout',
//   //   // iconComponent: { name: 'cil-account-logout' }
//   // },

];

