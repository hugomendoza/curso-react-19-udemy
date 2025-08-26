import { useState } from 'react';

// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section className={styles.itemRow}>
      <span
        style={{
          color: count === 1 ? 'red' : 'black',
        }}
        className={styles['item-name']}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
