import React from 'react'

export function componentDidMount() : Promise<any>{
    console.log("trying")
    return fetch('https://rest.coinapi.io/v1/assets',{
      headers: { 'X-CoinAPI-Key' : '16E2B4F6-C7E8-48B8-A947-025176EFB0F6'}  
    })
    .then(res => res.json())
}