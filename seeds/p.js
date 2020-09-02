exports.seed = async function(knex) {
  await knex("projects").insert([
    {name: 'name4', description: 'rowValue2', complete: 1},
    {name: 'name5', description: 'rowValue3', complete: 1}
  ])
}