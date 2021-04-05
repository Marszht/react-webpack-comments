import React, { Component } from "react";
import QRCode from "qrcode";
import html2canvas from "html2canvas";
import logo from "../logo.svg";

import "./QRcode.css";

class QRcode extends Component {
  constructor() {
    super();
    this.canvas = React.createRef();
  }
  state = {
    qrcode: "",
  };

  generateQR = async (text) => {
    const that = this;
    const opts = {
      // errorCorrectionLevel: "H",
      width: 100,
      // version: 10,
      margin: 2,
      // modules: "Alphanumeric"
    };
    try {
      let img = await QRCode.toDataURL(text, { ...opts });
      console.log({ img });
      that.setState({
        qrcode: img,
      });
      // let canvas = await QRCode.toCanvas(text);
      // var container = document.getElementById('canvas');
      // container.appendChild(canvas)
    } catch (err) {
      console.error(err);
    }
  };

  generateQRCanvas = async (text) => {
    const that = this;
    const opts = {
      errorCorrectionLevel: "H",
      width: 80,
      // version: 10,
      margin: 2,
      // modules: "Alphanumeric"
    };
    try {
      var canvas = document.getElementById("canvas");
      console.log({ canvas });
      await QRCode.toCanvas(canvas, text, { ...opts }, function (err, canv) {
        console.log(err, canv);
        canvas.appendChild(canv);
        // that.setState({
        //   qrcode: url
        // })
      });
      // let canvas = await QRCode.toCanvas(text);
      // var container = document.getElementById('canvas');
      // container.appendChild(canvas)
    } catch (err) {
      console.error(err);
    }
  };
  componentDidMount() {
    let path =
      "https://gfwx.gffunds.com.cn/html/app/gift-via-share/?android=1F&ios=3F&totalCount=54&merer_no_ecrp=4654d65asfsadfadsd#/page-for-mobile-web";
    // let path = "http://r6a.cn/bpzpt";
    this.generateQR(path);
    // this.generateQRCanvas(path);
  }
  render() {
    const { qrcode } = this.state;
    return (
      <div className="canvas">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={qrcode} className="qrcode" alt="" />
        {/* <div
          src={qrcode}
          className="qrcode"
          id="canvas"
          alt=""
          ref={this.canvas}
        ></div> */}
      </div>
    );
  }
}

export default QRcode;
