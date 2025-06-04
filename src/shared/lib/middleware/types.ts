import { NextRequest, NextResponse } from 'next/server';

export type Middleware = (
  request: NextRequest,
  context?: MiddlewareContext,
) => NextResponse | Promise<NextResponse>;

export type MiddlewareContext = {
  sessionId?: string;
  response: NextResponse;
};
