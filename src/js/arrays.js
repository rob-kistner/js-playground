const distinctArray = arr => Array.from(new Set([...arr]));

console.log(
  distinctArray([1,2,11,5,1,2,3,'aa','a',3,'b','a'])
    .sort((a,b) => a>b?1:-1)
);