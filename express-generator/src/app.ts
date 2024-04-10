import express, { Express, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

const app: Express = express();


import usersRouter from './routes/v1/users.router'


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//định nghĩa routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Express + TypeScript Server'});
});

//cấu hình route cho app
app.use('/api/v1/users', usersRouter)


// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const statusCode = err.status || 500;
  res.status(statusCode).json({ statusCode: statusCode, message: err.message });
});

export default app;
