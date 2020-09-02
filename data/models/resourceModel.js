const db = require("../config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

async function add(resource) {
  const [id] = await db("resources").insert(resource);
  return findById(id);
}
function find() {
  return db("resources");
}

