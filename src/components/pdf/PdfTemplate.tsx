import React from "react";
import {
  Page,
  Document,
  StyleSheet,
  Text,
  PDFViewer,
} from "@react-pdf/renderer";

const style = StyleSheet.create({
  body: {
    // paddingTop: 35,
    // paddingBottom: 65,
    // paddingHorizontal: 35,
    height: "95vh",
    width: "100vh",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
});

const PdfTemplate = () => {
  return (
    <PDFViewer
      showToolbar={false}
      height={"850px"}
      width={"800px"}
      style={style.body}
    >
      <Document>
        <Page>
          <Text style={style.title} fixed>
            Techathalon software solution
          </Text>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfTemplate;
