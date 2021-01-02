import React from 'react'

export function getCountryByCode(code : any, data : any) {
    console.log(data)
    return data.filter(
      function(data : any){ return data.code == code }
  );
}