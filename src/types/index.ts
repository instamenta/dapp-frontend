export type IDynamic = 'auto' | 'force-dynamic' | 'error' | 'force-static' // default 'auto'
export type IDynamicParams = boolean // default true
export type IRuntime = 'nodejs' | 'edge' // default 'nodejs'
export type IPreferredRegion = 'auto' | 'global' | 'home' | string | string[] // default 'auto'
export type IMaxDuration = number // default Set by deployment platform
export type IRevalidate = false | 'force-cache' | 0 | number// default  false
export type IFetchCache =
    'auto'
    | 'default-cache'
    | 'only-cache'
    | 'force-cache'
    | 'force-no-store'
    | 'default-no-store'
    | 'only-no-store' // default 'auto'

/**
 * @example
 *? export const dynamic = 'auto'
 *? export const dynamicParams = true
 *? export const revalidate = false
 *? export const fetchCache = 'auto'
 *? export const runtime = 'nodejs'
 *? export const preferredRegion = 'auto'
 *? export const maxDuration = 5
 */

//* opengrapg-image.png - image whne link is shared
// sitemap.tsx - SEO

//! favicon | .ico | locations = app/
// <link rel="icon" href="/favicon.ico" sizes="any" />


// icon | .ico, .jpg, .jpeg, .png, .svg | locations = app/**/*
// <link rel="icon"
//       href="/icon?<generated>"
//       type="image/<generated>"
//       sizes="<generated>"
// />

// apple-icon | .jpg, .jpeg, .png | locations = app/**/*
// <link rel="apple-touch-icon"
//       href="/apple-icon?<generated>"
//       type="image/<generated>"
//       sizes="<generated>"
// />