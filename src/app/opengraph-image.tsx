/* eslint-disable @next/next/no-img-element -- ImageResponse renders JSX to canvas, not a browser <img> */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "CodeWinOptimizer — Free open-source Windows optimizer and debloater for Windows 10 and 11. 181 apps, 140+ tweaks, WinGet & Chocolatey.";
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
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: "50%",
            backgroundColor: "rgba(45,212,191,0.10)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -120,
            width: 460,
            height: 460,
            borderRadius: "50%",
            backgroundColor: "rgba(56,130,246,0.10)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "64px 72px",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginBottom: 28,
              }}
            >
              <img src={logoSrc} width={84} height={84} style={{ borderRadius: 20 }} alt="" />
              <div
                style={{
                  fontSize: 46,
                  fontWeight: 700,
                  color: "#f1f5f9",
                  letterSpacing: -1,
                }}
              >
                CodeWinOptimizer
              </div>
            </div>
            <div
              style={{
                fontSize: 33,
                fontWeight: 600,
                color: "#5eead4",
                marginBottom: 18,
              }}
            >
              Free Windows Optimizer &amp; Debloater
            </div>
            <div
              style={{
                fontSize: 26,
                color: "#cbd5e1",
                lineHeight: 1.45,
              }}
            >
              Install 181 apps with WinGet &amp; Chocolatey · Apply 140+ registry,
              privacy and performance tweaks · Cleanup, startup manager, restore
              points &amp; system monitor.
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 14,
                marginTop: 30,
              }}
            >
              {["Windows 10 & 11", "Open Source", "No telemetry", "Portable .exe"].map(
                (chip) => (
                  <div
                    key={chip}
                    style={{
                      fontSize: 20,
                      color: "#f1f5f9",
                      border: "1px solid rgba(148,163,184,0.45)",
                      borderRadius: 999,
                      padding: "6px 18px",
                      backgroundColor: "rgba(15,23,42,0.7)",
                    }}
                  >
                    {chip}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 72,
            right: 72,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#64748b",
          }}
        >
          <span>https://codewinoptimizer.com</span>
          <span>winutil alternative · winget · chocolatey</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
