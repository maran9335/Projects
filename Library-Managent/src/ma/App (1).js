import { BrowserRouter,Routes ,Route,} from "react-router-dom";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import MenItem from "./Components/MenItem";
import WomenItem from "./Components/WomenItem";
import KidsItem from "./Components/KidsItem";
import UsersList from "./Components/UsersList";
import Menu from "./Components/Menu";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Menu></Menu>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/users" element={<UsersList/>}></Route>
    <Route path="/users/:id" element={<UsersList/>}></Route>
    <Route path="/form" element={<Form/>}></Route>
    
    <Route path="/products/">
    <Route path="mens" element={<MenItem/>}></Route>
    <Route path="womens" element={<WomenItem/>}></Route>
    <Route path="kids" element={<KidsItem/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
