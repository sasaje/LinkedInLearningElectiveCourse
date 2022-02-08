const createMultiplier = y => x => x * y;

/*
const double = x => x*2;
const triple = x => x*3;
const quardruple = x => x*4;*/

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quardruple = createMultiplier(4);

// call double(3);