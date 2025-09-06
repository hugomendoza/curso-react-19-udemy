import { useState } from 'react';
import { MyTitle } from './ui/MyTitle';
import { MySubTitle } from './ui/MySubTitle';

export const MemoHook = () => {
  const [title, setTitle] = useState('Hola');
  const [subTitle, setSubTitle] = useState('Mundo');

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <MyTitle title={title} />
      <MySubTitle subtitle={subTitle} />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-mx cursor-pointer">
        Cambiar título
      </button>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-mx cursor-pointer">
        Cambiar subtítulo
      </button>
    </div>
  );
};
