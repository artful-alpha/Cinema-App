const defaultState = { films: ["One"] };

function listFilmReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
        films: action.payload,
      };
  }
}

export default listFilmReducer;
