/**
 * Security configuration
 * (sails.config.security)
 *
 * These settings affect aspects of your app's security, such
 * as how it deals with CORS, the security policy and
 * other familiar security settings.
 *
 * For an overview of the Sails security configuration, see:
 * https://sailsjs.com/documentation/reference/configuration/sails-config-security
 *
 * For details and available options, see:
 * https://sailsjs.com/config/security
 */

module.exports.security = {

  /***************************************************************************
  *                                                                          *
  * CORS is like a more modern version of JSONP-- it allows your application *
  * to circumvent the same-origin policy and communicate with the           *
  * frontend JavaScript code from a different domain.  Note that if you're  *
  * building cross-platform mobile apps using Cordova, you'll want to       *
  * look into the "allowOrigins" setting below.                             *
  *                                                                          *
  ***************************************************************************/

  cors: {
    allRoutes: true,
    allowOrigins: ['http://localhost:5173', 'http://localhost:3000'],
    allowCredentials: false,
  },

  /***************************************************************************
  *                                                                          *
  * By default, Sails' built-in CSRF protection is disabled to facilitate   *
  * rapid development.  But be warned!  If your Sails app will be accessed  *
  * by web browsers, you should either enable CSRF protection or use        *
  * `disableSession` for API-only apps.                                     *
  *                                                                          *
  * To enable CSRF protection, set this to `true`.                          *
  *                                                                          *
  ***************************************************************************/

  csrf: false

};
