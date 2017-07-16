
export const requestUserName = (basicToken) => {
  basicToken = 'Basic ' + basicToken;
  return fetch("http://localhost:8080/fdj/private/recupererUserName",{
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
        'Authorization': basicToken
      },
      crossDomain: true,
      method:"GET"
  }).then((response)=>{
      return response.text();
    });
};
