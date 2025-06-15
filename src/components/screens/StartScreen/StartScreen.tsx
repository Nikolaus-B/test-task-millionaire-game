'use client';

import { useRouter } from 'next/navigation';
import styles from './StartScreen.module.scss';

export default function StartScreen() {
  const router = useRouter();

  return (
    <div className={styles.start}>
      <h1>Who wants to be a millionaire?</h1>
      <button onClick={() => router.push('/game')}>Start</button>
    </div>
  );
}