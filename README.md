# React Redux Toolkit E-Commerce (Learning Project)

This project demonstrates:

- React fundamentals
- React Router DOM navigation
- Redux Toolkit state management
- Toast notifications
- Cart logic (add, remove, update quantity)
- LocalStorage persistence
- Clean folder structure

## Concepts Covered

### React

- Components
- Props
- useState
- useEffect

### Routing

- BrowserRouter
- Routes
- Route
- useNavigate

### Redux Toolkit

- createSlice
- configureStore
- useSelector
- useDispatch
- Global state structure

### Toast

- react-hot-toast usage
- Success & error messages

## Redux Flow Explanation

Component → dispatch(action) → reducer → store updates → useSelector → UI re-renders

# Redux Toolkit Flow

1. We create a slice using createSlice().
2. We export actions.
3. We configure store.
4. We wrap App with <Provider>.
5. We use useSelector to read state.
6. We use dispatch to update state.
