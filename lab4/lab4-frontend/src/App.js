import './App.css';
import Products from './components/Products';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Products />
    </div>
    </QueryClientProvider>
  );
}

export default App;
