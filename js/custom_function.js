//imgEdit 隱藏網址參數
function hideParams(){
    var url = location.href; //get href
    var params=(new URL(url)).searchParams;
    window.history.replaceState({path:params.get('URL')},'',params.get('URL'));
}

function setPageParams(){

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