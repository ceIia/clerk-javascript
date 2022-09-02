/* Expected values for the 'Auth-Result' response header */
export enum AuthErrorReason {
  InlineKeyMissing = 'inline-key-missing',
  InlineKeyInvalid = 'inline-key-invalid',
  HeaderExpired = 'header-expired',
  HeaderEarly = 'header-early',
  HeaderInvalid = 'header-invalid',
  HeaderInvalidIssuer = 'header-invalid-issuer',
  HeaderMissingNonBrowser = 'header-missing-non-browser',
  HeaderMissingCORS = 'header-missing-cors',
  HeaderUnauthorizedParty = 'header-unauthorized-party',
  HeaderVerificationFailed = 'header-verification-failed',
  UATMissing = 'uat-missing',
  CrossOriginReferrer = 'cross-origin-referrer',
  CookieAndUATMissing = 'cookie-and-uat-missing',
  StandardSignedOut = 'standard-signed-out',
  CookieMissing = 'cookie-missing',
  CookieExpired = 'cookie-expired',
  CookieEarly = 'cookie-early',
  CookieInvalid = 'cookie-invalid',
  CookieInvalidIssuer = 'cookie-invalid-issuer',
  CookieOutDated = 'cookie-outdated',
  CookieUnauthorizedParty = 'cookie-unauthorized-party',
  CookieVerificationFailed = 'cookie-verification-failed',
  InternalError = 'internal-error',
  PublicKeyFetchError = 'pk-fetch-error',
  Unknown = 'unknown',
}

/* reason values for the expected TokenVerificationError on base.verifySessionToken  */
export enum TokenVerificationErrorReason {
  Expired,
  Invalid,
  ImportKeyError,
  JWTKeyMissing,
  MalformedToken,
  VerificationFailed,
  NotActiveYet,
  InvalidIssuer,
  UnauthorizedParty,
  PublicKeyFetchError,
}
