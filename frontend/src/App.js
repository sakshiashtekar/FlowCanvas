import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <PipelineToolbar />
        <PipelineUI />
      <div className="submit-wrap">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
