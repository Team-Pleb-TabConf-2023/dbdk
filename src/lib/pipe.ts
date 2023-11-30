type NextMethod = (idx ?: number) => void

type Middleware <T> = (
  data : T,
  next : NextMethod
) => unknown

export default function pipe <T> (...middlewares : Middleware<T>[]) {
  return async (data : T) => {
    try {
      const next = async (index: number) => {
        // If we are at the end, return.
        if (index === middlewares.length) return
        // Fetch middleware at the current index.
        const current = middlewares[index]
        // Try to execute the middleware.
        await current(data, () => next(index + 1)) 
      }
      await next(0)
    } catch (err) {
      throw err
    }
  }
}

