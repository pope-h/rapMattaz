import { envVars } from "@/utils/env";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  return new NextResponse(
    `<!DOCTYPE html>
        <html>
          <head>
            <title>Let FLock it up</title>
            <meta property="og:title" content="RapMattaz" />
            <meta property="og:image" content=${envVars.hostUrl}/pic.png />
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content=${envVars.hostUrl}/api/images/chat />
            <meta property="fc:frame:input:text" content="What is solana?" />
            <meta property="fc:frame:button:1" content="Ask me" />
            <meta property="fc:frame:post_url" content=${envVars.hostUrl}/api/chat />
          </head>
          <body/>
        </html>`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}

export const GET = POST;
