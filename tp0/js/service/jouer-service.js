
export const requestDate = (date) => {
  return fetch("http://localhost:8080/fdj/public/jouer",{
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      method:"POST",
      body:JSON.stringify({date})
  }).then((response)=>{
      return response.json();
    });
};
