import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./components/pages/AllMeetups";
import NewMeetupPage from "./components/pages/NewMeetup";
import FavoritesPage from "./components/pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
