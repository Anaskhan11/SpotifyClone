export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDNjjqc-AD5e11kHYJZ6ph2rFgeewYhaPdZG_LGiTcrra8xxx-Z9myx1fXcu36A8BNi4oT9UhggizGqP_bBkuHxu0ZisPZ0-1iHcK5U5k9UrNJ0IR17oB57Plsm5QQyBBvLInVEZV0G4qsMEvQilXwtsuTSFkZycKd-MtfNLT6MprcEGgY34hPJThxOG3RPOoI",
};

const reducer = (state, action) => {
  console.log(action);

  // action -> type , [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
