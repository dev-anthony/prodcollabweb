import { ImageResponse } from "next/og";

export const alt = "ProdCollab — Collaboration for music producers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#000000",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#4f7fdb",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 600 }}>ProdCollab</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            Different studio/DAW. Same session.
          </div>
          <div style={{ fontSize: 30, color: "#8a8a8a", maxWidth: 820 }}>
            Collaborate on sessions, stems, samples and revisions from your own
            setup.
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#8a8a8a" }}>
          Desktop app · Windows 10 / 11
        </div>
      </div>
    ),
    { ...size },
  );
}
