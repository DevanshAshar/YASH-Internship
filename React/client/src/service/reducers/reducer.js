const initialState = {
    employees: []
  };
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYEE':
        return {
          ...state,
          employees: [...state.employees, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default formReducer;