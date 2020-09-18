const xhr=new XMLHttpRequest(),
    
    $dog=document.getElementById("dog");
   
     xhr.addEventListener("readystatechange",(e) =>{
        if(xhr.readyState!==4)return;
        //console.log(xhr);
        if(xhr.status>=200 && xhr.status < 300){
            let json=JSON.parse(xhr.responseText);
            console.log(json);

            document.getElementById("dog").src=json.message
        }
    });
    xhr.open("get","https://dog.ceo/api/breeds/image/random");
    xhr.send();