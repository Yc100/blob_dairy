var clock ='';
var loveerDate = ()=>{
    window.clearInterval(clock);
    var nowDate = new Date()
    var togetherDate=new Date('2021-12-19 19:26:12')
    var togetherDay='已经'+timeAgo(nowDate,togetherDate)
    //document.getElementById("togetherDay").innerHTML=togetherDay;
    $('#togetherDay').html(togetherDay)
    clock = setInterval(diffTogetherDay, 1000);
    function timeAgo(timeA, timeB) {
 
        var diff = new Date(timeA).getTime() - new Date(timeB).getTime();
        //计算出相差天数  
        var days=Math.floor(diff/(24*3600*1000));  
           
        //计算出小时数  
        var leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数  
        var hours=Math.floor(leave1/(3600*1000));  
        //计算相差分钟数  
        var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数  
        var minutes=Math.floor(leave2/(60*1000));  
           
        //计算相差秒数  
        var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数  
        var seconds=Math.round(leave3/1000);  
          
        var returnStr = seconds + "秒";  
        if(minutes>0) {  
            returnStr = minutes + "分" + returnStr;  
        }  
        if(hours>0) {  
            returnStr = hours + "小时" + returnStr;  
        }  
        if(days>0) {  
            returnStr = days + "天" + returnStr;  
        }  
        return returnStr;  
    }

    function diffTogetherDay(){
        var href = $(location).attr('href');
        console.log(href)
        console.log(href.indexOf('/timeRecord'))
        if(href !='https://yc100.github.io' && href !='http://localhost:4000/'){
           // window.clearInterval(clock);
            
        }else{
            var togetherDate=new Date('2021-12-19 19:26:12')
            var togetherDay='已经'+timeAgo(new Date(),togetherDate)
            document.getElementById("togetherDay").innerHTML=togetherDay;
        }
    
        
        
    }
}
    
loveerDate();
