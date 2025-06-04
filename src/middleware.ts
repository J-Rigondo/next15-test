import { composeMiddleware } from '@/shared/lib/middleware/compose-middleware';
import { sessionMiddleware } from './shared/lib/middleware/session-middleware';
import { logMiddleware } from '@/shared/lib/middleware/log-middleware';
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default composeMiddleware([
  sessionMiddleware,
  logMiddleware,
  createMiddleware(routing),
]);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
