/**
 * Created by Hasee on 2016/9/2.
 */
function del(o){
    var ydel =document.getElementsByClassName('y-del');
    var chk = document.getElementsByClassName('chk');
    console.log(ydel)
    var row = document.getElementsByTagName('tr');
    var tab = document.getElementsByClassName('tab');
    console.log(tab)
    var tr = o.parentNode.parentNode;
    tr.parentNode.removeChild(tr);

}

//function more(){
//    var ym = document.getElementsByClassName('y-m');
//    var ymoree = document.getElementById('y-moree');
//    ymoree.style.display="block";
//}
