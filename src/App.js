import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Forgot from "./pages/forgot";
import Learn from "./pages/learnmore";
import Contact from "./pages/contact";
import Enroll1 from "./pages/enrollment/enrollment1";
import Enroll2 from "./pages/enrollment/enrollment2";
import Enroll3 from "./pages/enrollment/enrollment3";
import Policy from "./pages/policy";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        {/* Normal Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/learnmore" component={Learn} />
        <Route exact path="/enroll1" component={Enroll1} />
        <Route exact path="/enroll2" component={Enroll2} />
        <Route exact path="/enroll3" component={Enroll3} />
        <Route exact path="/policy" component={Policy} />
      </Switch>
    </Router>
  );
}

export default App;
