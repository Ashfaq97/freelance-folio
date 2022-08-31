import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients';
import AddClientModal from "./components/AddClientModal";
import Projects from "./components/Projects";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
const cache = new InMemoryCache({
  typePolicies: {
    Queries: {
      fields: {
        clients: {
          merge(existing, incoming){
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming){
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/projects/:id' element={<Project/>}/>
              <Route path='*' element={<NotFound/>}/> 
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
    
  );
}

export default App;
