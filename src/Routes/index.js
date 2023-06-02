const { Router } = require("express");
const routes = Router();

const userRouter = require("./users.routes");
const sessionsRouter = require("./sessions.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");

routes.use("/users", userRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;