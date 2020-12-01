function heslo1(){
    let heslo = document.getElementById('heslo').value;
    let zkontrolujHeslo = document.getElementById('zkontrolujHeslo').value;
   if(heslo !== zkontrolujHeslo){
       alert("Hesla se neshodují. Prosím zadejte shodné hesla")
        return false;
    }
    return true;
}

