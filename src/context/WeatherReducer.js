const WeatherReducer = (state, action) => {
  switch (action.type) {
    case "get-data":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default WeatherReducer;
