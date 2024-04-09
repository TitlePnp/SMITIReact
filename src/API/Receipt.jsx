import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Receipt.css";

function Receipt({ recID }) {
  const [RecID, setRecID] = useState(null);

  useEffect(() => {
    if (recID) {
      axios
        .post("http://localhost:7777/payerDetail", { ReceiptID: recID })
        .then((response) => {
          setRecID(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [recID]);

  let noVat = 0;
  let vat = 0;
  let total = 0;

  if (RecID) {
    RecID.forEach((item) => {
      const totalPrice = item.Qty * item.PricePerUnit;
      noVat += totalPrice;
      vat += totalPrice * 0.07;
    });

    total = noVat + vat;
  }

  return (
    <div className="invoice-box">
      <table className="mar">
        <thead>
          <tr className="top">
            <td colSpan="5">
              <table>
                <tr>
                  <td className="title">
                    <img
                      src="./public/logo2.png"
                      alt="logo"
                      style={{ width: "20%" }}
                    />
                  </td>
                  <td className="right">
                    <p className="copy">(ต้นฉบับ)</p>
                    <p className="header">ใบกำกับภาษี/ใบเสร็จรับเงิน</p>
                    <p className="company">
                      บริษัท เอสมิติช้อป จำกัด (สำนักงานใหญ่)
                    </p>
                    <p className="address">
                      999 หมู่ 999 ถ.ฉลองกรุง 9999 แขวงลาดกระบัง
                    </p>
                    <p className="address">เขตลาดกระบัง กรุงเทพมหานคร 10520</p>
                    <p className="address">
                      เลขประจำตัวผู้เสียภาษี: 12345678909999
                    </p>
                    <p className="address">
                      โทร. 0123456789 อีเมล smiti@test.com
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <td className="right">
            {RecID &&
              RecID.map((item, index) => (
                <div key={index}>
                  {index === 0 && (
                    <React.Fragment>
                      <p className="bold">
                        เลขที่เอกสาร: <span className="address">{recID}</span>
                      </p>
                      <p className="bold">
                        วันที่ออก:{" "}
                        <span className="address">{item.PayTime}</span>
                      </p>
                    </React.Fragment>
                  )}
                </div>
              ))}
          </td>
          {RecID && (
            <tr className="information">
              <td colSpan="5">
                <table>
                  <tr>
                    <td className="left">
                      {RecID.map((item, index) => (
                        <div key={index}>
                          {index === 0 && (
                            <React.Fragment>
                              <p className="company">ลูกค้า</p>
                              <p className="address">
                                {item.PayerFName} {item.PayerLName}
                              </p>
                              <p className="address">{item.PayerAddress}</p>
                              <p className="address">
                                {item.PayerProvince} {item.PayerPostcode}
                              </p>
                              {item.PayerTaxID && (
                                <p className="address">
                                  เลขประจำตัวผู้เสียภาษี:{" "}
                                </p>
                              )}
                              <p className="address">โทร. {item.PayerTel}</p>
                            </React.Fragment>
                          )}
                        </div>
                      ))}
                    </td>
                  </tr>

                  <tr className="heading">
                    <td className="headerTable">รายละเอียด</td>
                    <td className="headerTable center">จำนวน</td>
                    <td className="headerTable center">ราคาต่อหน่วย</td>
                    <td className="headerTable center">VAT</td>
                    <td className="headerTable center">มูลค่าก่อนภาษี</td>
                  </tr>
                  {RecID.map((item, index) => (
                    <tr key={index} className="item">
                      <td>
                        <div className="bold left">{item.ProName}</div>
                        <div className="descrip left">
                          ผู้แต่ง: {item.Author}
                        </div>
                      </td>
                      <td className="center price">{item.Qty}</td>
                      <td className="center price">{item.PricePerUnit}</td>
                      <td className="center price">7 %</td>
                      <td className="center price">{item.TotalPrice}</td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="gray">ราคาไม่รวมภาษีมูลค่าเพิ่ม</td>
                    <td></td>
                    <td className="gray center">{noVat.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="gray">ภาษีมูลค่าเพิ่ม 7%</td>
                    <td></td>
                    <td className="gray center">{vat.toFixed(2)}</td>
                  </tr>
                  <tr className="item">
                    <td></td>
                    <td></td>
                    <td className="black">จำนวนเงินรวมทั้งสิ้น</td>
                    <td></td>
                    <td className="black center">{total.toFixed(2)}</td>
                  </tr>
                </table>
              </td>
            </tr>
          )}
        </thead>
        <tbody>
          {/* ที่นี่คุณสามารถเพิ่มโค้ด HTML สำหรับข้อมูลใบกำกับภาษีหรือใบเสร็จรับเงินได้ */}
        </tbody>
      </table>
      <br /> <br /> <br /> <br />
    </div>
  );
}

export default Receipt;
