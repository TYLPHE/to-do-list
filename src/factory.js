//factory function to create to do contents
export default function factory(due, desc, priority){
    return {
        due: due,
        desc: desc,
        priority: priority,
    };
}