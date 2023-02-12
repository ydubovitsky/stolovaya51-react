const LoggingMiddleware = ({ dispatch, getState }) => next => action => {
  if(process.env.NODE_ENV === 'production') {
    console.log(process.env)
  }
  next(action);
}

export default LoggingMiddleware;