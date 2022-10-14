import './App.css';

function App() {
  const blocks = [
    {
      id: 'b1',
      block: 'yellow',
    },
    {
      id: 'b2',
      block: 'green',
    },
    {
      id: 'b3',
      block: 'color',
    },
    {
      id: 'b4',
      block: `${Math.random()}`,
    },

  
  ];

  return (
    <div className="App">
      {blocks.map((item) => {
        if (item.block === 'color') {
          item.block = 'lime';
        }
        if (+item.block > 0) {
          item.block = 'red';
        }
        return (
          <div
            style={{
              background: item.block,
              width: '100px',
              height: '100px',
              border: '3px solid white',
              gap: '10gap',
            }}
            key={item.id}
          >
            
          </div>
        );
      })}
    </div>
  );
}

export default App;
