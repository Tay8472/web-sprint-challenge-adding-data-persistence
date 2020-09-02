exports.seed = async function(knex) {
  await knex("tasks").insert([
    {notes: 'task1', description: 'rowValue1', complete: 1},
    {notes: 'task2', description: 'rowValue2', complete: 1},
    {notes: 'task3', description: 'rowValue3', complete: 1}
  ])
};