import { NextRequest, NextResponse } from 'next/server';
import { Middleware, MiddlewareContext } from '@/shared/lib/middleware/types';

export function composeMiddleware(middlewares: Middleware[]) {
  return async (request: NextRequest) => {
    let response: NextResponse = NextResponse.next();
    const context: MiddlewareContext = {
      response: NextResponse.next(),
    };

    for (const middleware of middlewares) {
      response = await middleware(request, context);
    }

    context.response.cookies.getAll().forEach((cookie) => {
      response.cookies.set(cookie.name, cookie.value, cookie);
    });

    return response;
  };
}
