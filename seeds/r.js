exports.seed = async function(knex) {
  await knex("resources").insert([
    {name: 'name1', description: 'rowValue1'},
    {name: 'name2', description: 'rowValue2'},
    {name: 'name3', description: 'rowValue3'}
  ])
};