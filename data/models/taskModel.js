const db = require("../config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

async function add(task) {
  const [id] = await db("tasks").insert(task);
  return findById(id);
}
function find() {
  return db("tasks");
}

