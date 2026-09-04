/* eslint-disable @next/next/no-img-element -- ImageResponse renders JSX to canvas, not a browser <img> */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "CodeWinOptimizer — Free open-source Windows optimizer and debloater for Windows 10 and 11.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public/logo.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#070d1a",
          backgroundImage:
            "linear-gradient(135deg, #0b1220 0%, #0e1a2f 55%, #12233f 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "64px 80px",
          }}
        >
          <img src={logoSrc} width={128} height={128} style={{ borderRadius: 28 }} alt="" />
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#f1f5f9",
              letterSpacing: -1,
              marginTop: 24,
            }}
          >
            CodeWinOptimizer
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#5eead4",
              marginTop: 14,
            }}
          >
            Optimize, debloat &amp; speed up Windows 10 / 11
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#cbd5e1",
              marginTop: 24,
              maxWidth: 860,
            }}
          >
            Free and open source. 140+ system tweaks, 181 apps via WinGet &
            Chocolatey, cleanup, startup manager and restore points — one portable
            .exe, no telemetry.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
