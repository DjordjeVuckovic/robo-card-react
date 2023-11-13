import './App.scss'
import {Route, Routes} from "react-router-dom";
import {Body} from "./core/body";
import {Navbar} from "./core/navbar";
import {HomePage} from "./pages/home/home-page.tsx";
import {PostsPage} from "./pages/posts";
import {storeDeprecated} from "./store/store.deprecated.ts";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {CounterPage,CounterPageDeprecated} from "./pages/counter";
function App() {

  return (
      <Provider store={store}>
          <Navbar/>
          <Body>
              <Routes>
                  <Route path='/' element={<HomePage/>} />
                  <Route path='/counter' element={<CounterPage/>} />
                  {/*<Route path='/counter' element={<CounterPageDeprecated/>} />*/}
                  <Route path='/posts' element={<PostsPage/>} />
              </Routes>
          </Body>
      </Provider>
  )
}

export default App
