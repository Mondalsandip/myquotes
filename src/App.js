import { Route,Switch,Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact > <Redirect  to='/quotes' />   </Route>
      <Route path='/quotes' exact>   <AllQuotes/>    </Route>   //This path will render list of quotes
      <Route  path='/quotes/:quoteId' > <QuoteDetail/> </Route>  //To render a details page of a particular quote
      <Route  path='/new-quote'><NewQuote/> </Route>  //To render a new quote
      {/* <Route path='/quotes/:quoteId/comments'> <Comments/> </Route> */}
      <Route path='*'> <NotFound/> </Route>


      
      
    </Switch>
    </Layout>
  );
}

export default App;
