/**
 * Created by samsung2014 on 2017/2/26.
 */
search=function(){

}
search.bIInfoPost=function(req,res,next){
    console.log(req.body);
    var enrol=req.body.enrol;
    var major=req.body.major;
    var arr = [];
    connection.query('select `姓名`,ID,`性别`,`出生年月`,`高考省份`,`高考类别`,`入学时间`,`入学专业`,`转专业`,`现专业`,`双专业`,`第二专业`,`辅修`,`辅修专业`,`高考数学成绩`,`高考英语成绩` from basicinformation WHERE `入学专业`="'+
        major+'"and `入学时间` ="'+enrol+'"', function(err, rows, fields) {
        if (err) throw err;
        if(!rows.length){
            res.redirect("/search");
            return;
        }else{
            for (var i = 0; i < rows.length; i++) {
                arr[i] = rows[i].name;
            }
            req.session.userId = "haha";
            res.redirect('/search');
            return;
        }
    });
}