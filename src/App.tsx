import './App.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "./components/Landing";
import InfluencerDetail from "./components/influencer/InfluencerDetail";
import PrivateRoute from "./components/Routing/PrivateRoute";

function App() {
  const queryClient = new QueryClient();

  return (
      <div className="wrapper transition duration-500 dark:bg-gray-600 h-screen bg-gray-50">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Landing />
              </Route>
              <PrivateRoute path="/influencer/:id" component={InfluencerDetail}/>
            </Switch>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
  );
}

export default App;
