import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    const newCountersValue = counters.map((c) =>
      c.id === id
        ? (c = { id: c.id, value: (c.value = c.value + 1), name: c.name })
        : c
    );
    setCounters(newCountersValue);
  };
  const handleDecrement = (id) => {
    const newCountersValue = counters.map((c) =>
      c.id === id
        ? (c = { id: c.id, value: (c.value = c.value - 1), name: c.name })
        : c
    );
    setCounters(newCountersValue);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}

      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        СБРОС
      </button>
    </>
  );
};

export default CountersList;
