import './App.css';
import Board from './components/board/Board';
import Score from './components/score/Score';
import Options from './components/options/Options';

function App() {
  return (
    <div className='container'>
      <Score />
      <Board>

      </Board>
      <Options />
    </div>
  );
}

export default App;
