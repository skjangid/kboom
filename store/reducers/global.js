const GLOBAL_MENUS = 'GLOBAL_MENUS';
const GLOBAL_DRAWER_MENUS = 'GLOBAL_DRAWER_MENUS';

const initialState = {
  menus: null,
  drawerMenus: null
}

export const setMenus = (menus) => {
  return {
    type: GLOBAL_MENUS,
    menus
  }
}

export const setDrawerMenus = (drawerMenus) => {
  return {
    type: GLOBAL_DRAWER_MENUS,
    drawerMenus
  }
}

export default function global(state = initialState, action) {
  switch (action.type) {
    case GLOBAL_MENUS:
      return {
        ...state,
        menus: action.menus
      }
    case GLOBAL_DRAWER_MENUS:
      return {
        ...state,
        drawerMenus: action.drawerMenus
      }
    default:
      return state
  }
}
