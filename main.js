function App() {
    const [counters, setCounters] = React.useState([
        { id: 1, number: 9 },
        { id: 2, number: 7 },
        { id: 3, number: 8 },
        { id: 4, number: 6 },
        { id: 5, number: 2 },
        { id: 6, number: 2 },
    ]);

    const updateCounter = (id) => {
        let idx = counters.findIndex(el => el.id === id);
        const newCounters = [...counters];
        newCounters[idx].number += 1;
        
        setCounters(newCounters);
    };

    const decrementCounter = (id) => {
        let idx = counters.findIndex(el => el.id === id);
        const newCounters = [...counters];
        if (newCounters[idx].number > 0) {
            newCounters[idx].number -= 1;
        }
        setCounters(newCounters);
    };

    const clearCounter = (id) => {
        let idx = counters.findIndex(el => el.id === id);
        const newCounters = [...counters];
        newCounters[idx].number = 0;
        setCounters(newCounters);
    };

    const addCounter = () => {
        const newId = counters.length ? Math.max(counters.map(c => c.id)) + 1 : 1;
        const newCounter = { id: newId, number: 0 };
        setCounters([...counters, newCounter]);
    };

    const getSum = () => {
        return counters.reduce((sum, counter) => sum + counter.number, 0);
    };

    return (
        <div className='app'>
            <h1 className="show-sum">Sum = {getSum()}</h1>
            <button onClick={addCounter} className="btn-add">Add Counter</button>
            <hr />
            {counters.map(el => (
                <Counter
                    key={el.id}
                    item={el}
                    updateCounter={updateCounter}
                    decrementCounter={decrementCounter}
                    clearCounter={clearCounter}
                />
            ))}
        </div>
    );
}

function Counter(props) {
    const { item, updateCounter, decrementCounter, clearCounter } = props;
    return (
        <div className="counter">
            <button onClick={() => decrementCounter(item.id)} className="btn btn-dec">-</button>
            <h3 className="number">{item.number}</h3>
            <button onClick={() => updateCounter(item.id)} className="btn btn-inc">+</button>
            <button onClick={() => clearCounter(item.id)} className="btn btn-clr">C</button>
        </div>
    );
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
