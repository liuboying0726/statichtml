/**
 * Created by Hasee on 2016/9/5.
 */
function selectall(my){
    var chks = document.getElementsByName("chk");
    var getall = document.getElementById('selectall');
    for(var i = 0; i < chks.length; i++){
        //chks[i].checked = !chks[i].checked;
        if( getall.checked){
            chks[i].checked =true;
        }else{
            chks[i].checked =false;
        }
//            if(chks[i].checked){
//                chks[i].checked = false;
//            }else {
//                chks[i]. checked = true;
//            }
    }
}