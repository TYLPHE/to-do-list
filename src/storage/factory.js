import storage from "./storage";

// factory function to create to do contents
function factory(due, desc, priority, tag) {
  storage.id += 1;
  return {
    id: storage.id,
    due,
    desc,
    priority,
    complete: false,
    tag,
    lastEdited: false,
  };
}

export default factory;
