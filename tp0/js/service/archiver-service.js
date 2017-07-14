
export const requestObjetArchive = (objetArchive, basicToken) => {
  basicToken = 'Basic ' + basicToken;
  return fetch("http://localhost:8080/fdj/private/archiver",{
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
        'Authorization': basicToken
      },
      crossDomain: true,
      method:"POST",
      body:JSON.stringify(objetArchive)
  }).then((response)=>{
      return response.json();
    });
};

export const requestDelete = (id, basicToken) => {
  basicToken = 'Basic ' + basicToken;
  return fetch(`http://localhost:8080/fdj/private/archiver?id=${id}`,{
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
        'Authorization': basicToken
      },
      method:"DELETE"
  });
};
