import enquire from 'enquire.js'

import sanitize from './sanitize'
import defaultQueries from './queries'

/**
 * Media Query Observer
 *
 * Uses enquire.js to watch media queries
 *
 */

class MediaQueryObserver {
  constructor() {
    this.queries = defaultQueries
  }

  /**
   * Add observable media queries.
   *
   * @param {Object} queries
   */
  add(queries = {}) {
    Object.entries(queries).forEach(([name, query]) => {
      this.queries[name] = sanitize(query)
    })
  }

  /**
   * Observe a named media query. Returns a function that kills the observer.
   *
   * @param {String} queryName
   * @param {Function|Object} handler
   * @return {Function}
   */
  register(queryName, handler) {
    this.validate(queryName, handler)

    enquire.register(this.queries[queryName], handler)
    return () => enquire.unregister(this.queries[queryName], handler)
  }

  /**
   * Validate a named media query and handler. Used internally.
   *
   * @param {String} queryName
   * @param {Function|Object} handler
   */
  validate(queryName, handler) {
    if (!this.queries[queryName]) {
      throw new Error(`Cannot observe undefined media query ${queryName}`)
    }
    if (!handler) {
      throw new Error(`Cannot observe media query with an undefined handler`)
    }
  }
}

export default new MediaQueryObserver()
