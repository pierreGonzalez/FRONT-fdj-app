
export const requestObjetArchive = (objetArchive) => {
  return fetch("http://localhost:8080/fdj/archiver",{
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      method:"POST",
      body:JSON.stringify(objetArchive)
  }).then((response)=>{
      return response.json();
    });
};
