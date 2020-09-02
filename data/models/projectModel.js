const db = require("../config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

async function add(project) {
  const [id] = await db("projects").insert(project);
  return findById(id);
}
function find() {
  return db("projects");
}
