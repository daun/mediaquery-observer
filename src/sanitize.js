/**
 * Sanitize a number-only media query.
 *
 * In:  1024
 * Out: only screen and (min-width: 1024px)
 *
 * @param {Number|String} query
 * @return {String}
 */
export default function sanitize(query) {
  // Assume px unit
  if (typeof query === 'number') {
    query = `${query}px`
  }
  // Assume min-width prefix
  if (/^\d/.test(query)) {
    query = `(min-width: ${query})`
  }
  // Assume screen medium
  if (/^\(.*\)$/.test(query)) {
    query = `only screen and ${query}`
  }
  return query
}
