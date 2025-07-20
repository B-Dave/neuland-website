import { withContentlayer } from 'next-contentlayer2'

export default withContentlayer({
	output: 'standalone',
	experimental: {
		reactCompiler: true,
		webpackMemoryOptimizations: true
	}
})
