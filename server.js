const server = express();
const projectRouter = require('./data/routers/projectRouter');
const resourceRouter = require('./data/routers/resorceRouter');
const taskRouter = require('./data/routers/taskRouter');

server.use(express.json());
server.use('/projects', projectRouter);
server.use('/resources', resourceRouter);
server.use('/tasks', taskRouter)

server.get("/", (req, res) => {
    res.json({message: "Server Running"})
})

module.exports = server;