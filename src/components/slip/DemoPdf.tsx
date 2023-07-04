import { useRef } from "react";
import jsPDF from "jspdf";
import ReportTemplate from "./ReportTemplate";
import ReactDOMServer from "react-dom/server";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import Html from "react-pdf-html";

const DemoPdf = () => {
  //   const reportTemplateRef = useRef<HTMLDivElement | null |string | HTMLElement  >();

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");

    doc.html(`<h1 style={{ color : 'red'}} >this is in h1 tag</h1>`, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };
  const html = ReactDOMServer.renderToStaticMarkup(<ReportTemplate />);

  return (
    <div>
      <button className="button" onClick={handleGeneratePdf}>
        Generate PDF
      </button>
      {/* <div ref={reportTemplateRef}>
        <ReportTemplate />
      </div> */}
      <Document>
        <Page>
          <View>
            <Text>
              <Html>{html}</Html>
            </Text>
          </View>
        </Page>
      </Document>
    </div>
  );
};

export default DemoPdf;
