export const initialState = {
  loading: false,
  dog: "",
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, dog: "", error: "", loading: true };
    case "SUCCESS":
      return { ...state, dog: action.payload, loading: false };
    case "FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      break;
  }
};
