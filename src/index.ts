import {
  ServiceConnector,
  ServiceData,
  ServiceJob,
  WebLNAPI
} from './types/index.js'

export function get_fetcher (wallet : WebLNAPI) {
  // Return a wrapped fetcher that can handle L402.
  return (req : string, init ?: RequestInit) => {
    console.log(wallet)
    return fetch(req, init)
  }
}

export function compile_service (
  service  : ServiceData,
  presets ?: Record<string, any>
) : ServiceJob {
  // Convert service data into a job.
  return {}
}

export function chain_service (
  prev_job  : ServiceJob,
  service   : ServiceData,
  connector : ServiceConnector
) : ServiceJob[] {
  // Compile services and connector into two jobs.
  return []
}

export function run_pipeline (
  jobs : ServiceJob[]
) {
  // Use pipe method, but have catch return a context object
  // with a retry() function. User can inspect and modify the
  // context object, then use retry(idx ?: number) to resume the pipe.
  return async (init ?: RequestInit) => {
    try {

    } catch (err) {
      return {
        retry : (current : RequestInit) => {}
      }
    }
  }
}
