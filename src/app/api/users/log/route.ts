export async function POST(request: Request) {
  const {
    sessionId,
    ip,
    path,
    httpMethod,
    useragent,
    referer,
    deviceType,
    os,
    browser,
  } = await request.json();

  // await prisma.userLog.create({
  //   data: {
  //     sessionId,
  //     ip,
  //     path,
  //     httpMethod,
  //     useragent,
  //     referer,
  //     deviceType,
  //     os,
  //     browser,
  //   },
  // });

  return new Response('ok');
}
