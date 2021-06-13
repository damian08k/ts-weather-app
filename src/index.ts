const x = 'www';

let func: (a: string, b: number) => string | number;

func = (a, b) => x + b;

func(x, 10);
