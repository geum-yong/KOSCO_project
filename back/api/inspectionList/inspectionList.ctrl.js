const sql = require('mssql');
const config = require('../../lib/configDB');

require('dotenv').config();

// 검사 리스트 찾기
exports.find = async (req, res) => {
  const { startDate, endDate, process } = req.params;

  try {
    const pool = await sql.connect(config);
    const { recordset } =
      process === '1'
        ? await pool.request().query`
      SELECT dbo.GD_F_CUSTNM(H.CUSTCD) AS CUSTNM
      ,H.RCVDT
      ,(SELECT S.SHIPNM FROM GMSTSHIP S WHERE S.SHIPNO = H.SHIPNO) AS SHIPNM
      ,H.RCVNO
      ,C.DOC_NO
      ,(SELECT MAX(D.DOC_NM) FROM GDOC_1 D WHERE D.DOC_NO = C.DOC_NO) AS DOC_NM
      ,C.CERT_NO
      FROM GRCV_H H
      INNER JOIN GRCV_CT C
      ON H.PLANT = C.PLANT
      AND H.RCVNO = C.RCVNO
      LEFT OUTER JOIN GDOC_3 R
      ON C.CERT_NO = R.CERT_NO
      WHERE H.PLANT = '002001'
      AND H.RCVDT BETWEEN ${startDate} AND ${endDate}
      AND ISNULL(R.RESULT_GB,'') LIKE '%'
      ORDER BY CUSTNM, RCVDT
      `
        : process === '2'
        ? await pool.request().query`
      SELECT dbo.GD_F_CUSTNM(H.CUSTCD) AS CUSTNM
        ,H.RCVDT
        ,(SELECT S.SHIPNM FROM GMSTSHIP S WHERE S.SHIPNO = H.SHIPNO) AS SHIPNM
        ,H.RCVNO
        ,C.DOC_NO
        ,(SELECT MAX(D.DOC_NM) FROM GDOC_1 D WHERE D.DOC_NO = C.DOC_NO) AS DOC_NM
        ,C.CERT_NO
        FROM GRCV_H H
        INNER JOIN GRCV_CT C
        ON H.PLANT = C.PLANT
        AND H.RCVNO = C.RCVNO
        LEFT OUTER JOIN GDOC_3 R
        ON C.CERT_NO = R.CERT_NO
        WHERE H.PLANT = '002001'
        AND H.RCVDT BETWEEN ${startDate} AND ${endDate}
        AND ISNULL(R.RESULT_GB,'') LIKE '%'
        AND C.MAGAMYN = '0'
        ORDER BY CUSTNM, RCVDT
      `
        : await pool.request().query`
      SELECT dbo.GD_F_CUSTNM(H.CUSTCD) AS CUSTNM
        ,H.RCVDT
        ,(SELECT S.SHIPNM FROM GMSTSHIP S WHERE S.SHIPNO = H.SHIPNO) AS SHIPNM
        ,H.RCVNO
        ,C.DOC_NO
        ,(SELECT MAX(D.DOC_NM) FROM GDOC_1 D WHERE D.DOC_NO = C.DOC_NO) AS DOC_NM
        ,C.CERT_NO
        FROM GRCV_H H
        INNER JOIN GRCV_CT C
        ON H.PLANT = C.PLANT
        AND H.RCVNO = C.RCVNO
        LEFT OUTER JOIN GDOC_3 R
        ON C.CERT_NO = R.CERT_NO
        WHERE H.PLANT = '002001'
        AND H.RCVDT BETWEEN ${startDate} AND ${endDate}
        AND ISNULL(R.RESULT_GB,'') LIKE '%'
        AND C.MAGAMYN = '1'
        ORDER BY CUSTNM, RCVDT
      `;

    res.send({ message: 'find success', list: recordset });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};

// 단위 응답
exports.units = async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const { recordset } = await pool.request().query`
      select * from gmstcode where cd like 'bs06%' and lvl = '2' and useyn = '1' 
    `;

    res.send({ message: 'find success', units: recordset });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
