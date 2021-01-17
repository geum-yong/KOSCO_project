const sql = require('mssql');
const config = require('../../lib/configDB');

// 유저 찾기
exports.find = async (req, res) => {
  const { userId, userPw } = req.body;

  try {
    const pool = await sql.connect(config);
    const { recordset, rowsAffected } = await pool.request()
      .query`select EmpNo, EmpNm from dbo.GMSTUSER where EmpNo=${userId} and PassWord=${userPw} and OutDt=''`;

    if (!rowsAffected[0]) {
      res.send({ message: 'find fail', error: '존재하지 않은 사용자입니다.' });
      return;
    }

    req.session.login = {
      userId: recordset[0].EmpNo,
      userPw: recordset[0].EmpNm,
    };

    res.send({ message: 'find success' });
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
};
