// const Exchanges = require('../models/exchanges')
const { json } = require('express');
const db  = require('../models/index')
const Exchange = db.exchanges;
const ExchangeDetail = db.exchangeDetails;
const axios = require('axios');



const getExchanges =  ()=>{
    return new Promise((resolve,reject)=>{
        let config = {
            method: 'get',
            url: 'https://rest.coinapi.io/v1/exchanges/icons/32',
            headers: {
              'X-CoinAPI-Key': 'FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9'
            }
        };
        axios(config)
        .then((result)=>{
            resolve(result.data)
        })
        .catch(err => {
            resolve([])
        })
    })
}
const getExchangeDetails = ()=>{
    return new Promise((resolve,reject)=>{
        let config = {
            method: 'get',
            url: 'https://rest.coinapi.io/v1/exchanges',
            headers: {
              'X-CoinAPI-Key': 'FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9'
            }
        };
        axios(config)
        .then((result)=>{
            resolve(result.data)
        })
        .catch(err => {
            resolve([])
        })
    })
}
const syncData = async (req,res)=>{
    let exchangesData = await getExchanges();
    // console.log("exchanges",exchangesData)
    await Exchange.insertMany(exchangesData)
    let exchangeDetails = await getExchangeDetails();
    await ExchangeDetail.insertMany(exchangeDetails)
    res.status(200).json({ status:true, message: 'sync', data: {exchangesData,exchangeDetails} });
}

const getData = async (req,res)=>{
    let getData = await ExchangeDetail.find({});
    res.status(200).json({ status:true, message: 'get data', data: {getData} });
}

module.exports = {
    syncData, getData
}