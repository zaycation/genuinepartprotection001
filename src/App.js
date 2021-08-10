import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Forgot from "./pages/forgot";
import Learn from "./pages/learnmore";
import Contact from "./pages/contact";

import Nav from "./components/nav";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* Normal Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/learnmore" component={Learn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
