import './App.css';
import Colors from './components/Colors';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Colors />
      </div>
    </QueryClientProvider>
  );
}

export default App;
