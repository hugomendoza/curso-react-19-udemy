import type { CSSProperties } from 'react';

const firstName = 'Fernando !!';
const lastName = 'Herrera';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = false;

const address = {
  zipCode: 'ABC-123',
  country: 'Canadá',
};

const myStyles: CSSProperties = {
  backgroundColor: 'red',
  borderRadius: 20,
  padding: 10,
  marginTop: 30,
};

export function MyAwesomeApp() {
  return (
    <div data-testid='div-app'>
      <h1 data-testid='first-name-title'>{firstName}</h1>
      <h3>{lastName}</h3>

      <p className='mi-clase-favorita'>{favoriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'No activo'}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </div>
  );
}
