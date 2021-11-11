"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var apiKey = 'YQnG8xqCyq2shbGATEpCX95u0Kb5biNc';
// https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }
var giphyApi = axios_1.default.create({
    baseURL: "https://api.giphy.com/v1/gifs",
    params: {
        api_key: apiKey,
    }
});
giphyApi.get('/random')
    .then(function (res) {
    var data = res.data.data;
    var url = data.images.original.url;
    // console.log(url);
    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append( img );
});
