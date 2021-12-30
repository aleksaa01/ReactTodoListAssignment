import {ThemeProvider, createTheme } from '@mui/material/styles';
import {Provider} from 'react-redux';
import {Router, Redirect} from '@reach/router';

import store from '../store';
import TodosPage from '../pages/TodosPage';
import TodosCreatePage from '../pages/TodosCreatePage';
import TodosEditPage from '../pages/TodosEditPage';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Router style={{height: '100%'}}>
          <Redirect noThrow from="/" to="/todos" />
          <TodosPage path="/todos" />
          <TodosCreatePage path="/todos/create" />
          <TodosEditPage path="/todos/edit/:todoIndex" />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
