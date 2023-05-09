import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Analytics from './components/Analytics/Analytics';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import QuizDetail from './components/QuizDetail/QuizDetail';
import Result from './components/Result/Result';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/home',
          element: <Home></Home>,
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/analytics',
          element: <Analytics></Analytics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/quizes/:quizId',
          element: <QuizDetail></QuizDetail>,
          loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        {
          path:'/quizes/:quizId/result',
          element: <Result></Result>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
