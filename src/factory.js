//factory function to create to do contents
function factory(due, desc, priority){
    return {
        due: due,
        desc: desc,
        priority: priority,
    };
}
export default factory;