// //imgEdit 隱藏網址參數
// function hideParams(){
//     var url = location.href; //get href
//     var params=(new URL(url)).searchParams;
//     window.history.replaceState({path:params.get('URL')},'',params.get('URL'));
// }

function setPageName(pageName){
    var newPath = document.location.origin+'/?page='+pageName
    window.history.replaceState({path: newPath},'',newPath);
}

function getPageName(){
    var url = location.href; //get href
    var page=(new URL(url)).searchParams.get('page');
    var arr = ['page1.html','page2.html','page3.html','page4.html','err.html']
    if(jQuery.inArray(page, arr)!=-1){
        return page
    }else{
        console.log('page='+page)
        return arr[0]
    }

}



function testDoc(){
    console.log("document.URL : "+document.URL);
    console.log("document.location.href : "+document.location.href);
    console.log("document.location.origin : "+document.location.origin);
    console.log("document.location.hostname : "+document.location.hostname);
    console.log("document.location.host : "+document.location.host);
    console.log("document.location.pathname : "+document.location.pathname);
}

//在圖片連結加入token
function set_imageEdit_token(){
    $('.imgURL')
    .each(function()
    {
      var href = this.href;
      var params = (new URL(href)).searchParams;
        if(params.get('Name') != null){
          var txt = params.get('URL')+params.get('FileName')+params.get('Tag')
          var token = sha256(txt)
          this.href = this.href+'&token='+token;
        }
    });
}