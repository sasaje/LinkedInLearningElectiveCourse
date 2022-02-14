//Survey Respondents
const resOne = {id: 1234};
const resTwo = {id: 5678};
const resThree = {id: 9012};
const resFour = {id: 3456};

//Create a new WeakSet and add the above values to your newly created WeakSet. 
const surveyRes = new WeakSet();
surveyRes.add(resOne).add(resTwo).add(resThree).add(resFour);
console.log("WeakSet", surveyRes);

//Does your WeakSet have any responses tied to the {id: 9012}?
console.log("Does the Set has id:9012?", surveyRes.has(resThree));

//Does your WeakSet have any responses tied to the {id: 0123}?
console.log("Does the Set has id:0123?", surveyRes.has({ id:0123 }));

//We need to delete resThree from the WeakSet.
surveyRes.delete(resThree);
console.log(surveyRes.has(resThree));