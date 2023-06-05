import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Analytics from './components/Analytics/Analytics';
import Blog from './components/Blog/Blog';
import QuizDetail from './components/QuizDetail/QuizDetail';
import Result from './components/Result/Result';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/home',
          element: <Home></Home>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/analytics',
          element: <PrivateRoute><Analytics></Analytics></PrivateRoute>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        // {
        //   path: '/about',
        //   element: <About></About>
        // },
        {
          path: '/quizes/:quizId',
          element: <PrivateRoute><QuizDetail></QuizDetail></PrivateRoute>,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        {
          path: '/result',
          element: <Result></Result>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ],
      errorElement: <ErrorPage></ErrorPage>
    },
    // {
    //   path: "*",
    //   element:
    //     <div>
    //       <h2>Oops!</h2>
    //       <h3>404 Error! Route Not Found!</h3>
    //     </div>
    // }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
