// import AppNavigator from '../navigation/navigationStack';
// import { NavigationActions } from 'react-navigation';

// const LOGIN = 'LOGIN'
// const LOGOUT = 'LOGOUT'
// const INIT = 'INIT'

// console.log('app nav', AppNavigator)
// const tabsAction = NavigationActions.init()
// const tabsState = AppNavigator.router.getStateForAction(tabsAction)

// const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams('Home');
// const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams('Home');

// const stateForLoggedOut = AppNavigator.router.getStateForAction(ActionForLoggedOut);
// const stateForLoggedIn = AppNavigator.router.getStateForAction(ActionForLoggedIn);

// const initialState = {
//   stateForLoggedOut,
//   stateForLoggedIn
// }

// export default function (state = initialState, action) {
//   let nextState;
//   switch (action.type) {
//     case INIT:
//       nextState = {
//         ...state,
//         stateForLoggedIn: AppNavigator.router.getStateForAction(
//           ActionForLoggedIn,
//           stateForLoggedOut
//         )
//       }
//       break;
//     case LOGIN:
//       nextState = {
//         ...state,
//         stateForLoggedIn: AppNavigator.router.getStateForAction(
//           ActionForLoggedIn,
//           stateForLoggedOut
//         )
//       }
//       break;
//     case LOGOUT:
//       nextState = {
//         ...state,
//         stateForLoggedOut: AppNavigator.router.getStateForAction(
//           NavigationActions.reset({
//             index: 0,
//             actions: [NavigationActions.navigate({ routeName: 'place' })]
//           })
//         )
//       };
//       break;
//     default:
//       nextState = {
//         ...state
//       }
//       break;
//   }
//   return nextState || state;
// }


// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'))

// export default function (state = initialState, action) {
//   const nextState = AppNavigator.router.getStateForAction(action, state);
//   return nextState || state;
// }