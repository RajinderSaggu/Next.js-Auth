/** 
 * An array of routes that are accessible to the public 
 * These are routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
    "/"
]
/** 
 * An array of routes that are used for authentication 
 * These are routes will redirect logged in users to settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]
/** 
 * The prefix for the routes
 *  Routes that start with this prefix are used for Api Authentication Purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";