/**
 * Enum representing different routes for the application.
 * Each route has a corresponding path.
 * @readonly
 * @enum {string}
 */
enum RoutePath {
  Home = '/', // Path for the home page
  Projects = '/projects', // Path for the projects page
  ProjectDetail = '/projects/', // Path for project details
  Education = '/education', // Path for the education page
}

/**
 * Object mapping route keys to their respective paths.
 * Use these keys when navigating or referencing paths in the code.
 * @type {Object}
 * @property {string} home - Path for the home page.
 * @property {string} projects - Path for the projects page.
 * @property {string} projectDetails - Path for project details.
 * @property {string} education - Path for the education page.
 */
export const routesPaths = {
  home: RoutePath.Home,
  projects: RoutePath.Projects,
  projectDetails: RoutePath.ProjectDetail,
  education: RoutePath.Education,
};
