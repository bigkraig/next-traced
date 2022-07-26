const { tracer: Tracer } = require('dd-trace')
const tracer = Tracer.init({
  // Your options here.
  runtimeMetrics: true,
  logInjection: true,
  debug: true,
})
