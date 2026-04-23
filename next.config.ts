import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

/**
 * MDX plugin options must be serializable under Turbopack, which rules out
 * passing imported plugin functions. We keep the config minimal; richer
 * features (GFM, syntax highlighting) can be added via MDX source-level
 * directives or swapped in later via a webpack build.
 */
const withMDX = createMDX({
	extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
