// Turn the object into JSON and back
let user = {
  name: "John Smith",
  age: 35,
};

let user2 = JSON.parse(JSON.stringify(user));

// Exclude backreferences
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;
const seen = new WeakSet();
let jsonStr = JSON.stringify(meetup, function replacer(key, value) {
  if (typeof value != "object") return value; // primitive value, as weekSet only store objects
  if (seen.has(value)) return undefined; // circular reference, do not try to serialize this object again
  seen.add(value); // first time to see this object, mark this object as seen
  return value;
});

console.log("json str ", jsonStr);
