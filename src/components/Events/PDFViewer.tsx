"use client";

import dynamic from "next/dynamic";

const EmbedPDFViewer = dynamic(
  () => import("@embedpdf/viewer-react").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-[450px] bg-white rounded-2xl">
        <p className="text-[#013161] font-medium">Loading PDF viewer...</p>
      </div>
    ),
  },
);

type PDFViewerProps = {
  src: string;
  title?: string;
};

export function EventPDFViewer({
  src,
  title = "Event Information",
}: PDFViewerProps) {
  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-[#013161]">
              {title}
            </h2>
          </div>

          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#013161] text-white font-bold text-sm hover:bg-[#1876d0] transition-colors"
          >
            Download PDF ↗
          </a>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-[#013161]/20 shadow-md bg-white">
          <EmbedPDFViewer
            src={src}
            theme="light"
            readOnly={true}
            style={{
              height: "min(850px, 80vh)",
              minHeight: "650px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
