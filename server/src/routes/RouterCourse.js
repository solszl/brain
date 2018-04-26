import Router from "koa-router";
import { CourseController } from "../controller/index";
const childRouter = new Router({
    prefix: '/course'
});
childRouter.post("/add", CourseController.AddCourse);
childRouter.post("/remove", CourseController.RemoveCourseByLevel);
childRouter.post("/tai", CourseController.AnswerTai);
childRouter.post("/quiz", CourseController.AnswerQuiz);
childRouter.post("/get", CourseController.GetCourse);

module.exports = childRouter;