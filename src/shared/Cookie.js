const getCookie = (name) => {
    let value = "; " + document.cookie;

    let parts = value.split(`; ${name}=`);   //귀찮으니까 `; ${name}=` 로 나누겠댜

    if(parts.length === 2){
        return parts.pop().split(";").shift();  //pop: 배열의 뒤의 요소만 가져온다  // shift 배열의 앞의 요소만 가져온다

    }
}

const setCookie = (name, value, exp = 5) => {     //exp를 인수로 받아오지 않아도 기본값을 5로 해서 exp를 사용할 수 있다

        let date = new Date();   //new Date()는 어디서 온거지?? 

        date.setTime(date.getTime() + exp*24*60*60*1000);

        document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;    //toUTCstring() 은 뭐지??
}

const deleteCookie = (name) => {
    let date = new Date("2020-01-01").toUTCString();

    console.log(date);

    document.cookie = name+"=; expires="+date;





}

export {getCookie, setCookie, deleteCookie};