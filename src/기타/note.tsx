import React from 'react';

type Player = {
  name: string;
  age?: number;
};

type SuperPrint = {
  <T>(arr: T[]): any;
};

type Add = (a: number, b: number) => number;

function note() {
  const man: [string, number, boolean] = ['nico', 12, true];
  let arr = [1, 2, 3, 4];
  const superPrint: SuperPrint = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  };

  const Nico: Player = {
    name: 'nico',
  };

  const add: Add = (a, b) => a + b;

  let a: unknown;
  if (typeof a === 'number') {
    const b = a + 1;
  }

  function playerMaker(name: string): Player {
    return {
      name,
    };
  }

  function hello(name: string | number) {
    if (typeof name === 'string') {
      name = 'nico';
    } else if (typeof name === 'number') {
      name = 12;
    } else {
      name;
    }
  }
  return (
    <div className='App'>
      <button onClick={superPrint(arr)}></button>
    </div>
  );
}

export default note;
