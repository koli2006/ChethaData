const axios = require('axios')

const cheerio = require("cheerio");
const path = require("path");
//const { tmpdir } = require("os");
const fs = require("fs");
const { spawn } = require("child_process");
//let chalk = require('chalk');


const ss = "> _⫷☬⍣V͜͡I͜͡M͜͡A͜͡M͜͡O͜͡D͜͡S͜͡ W͜͡H͜͡A͜͡T͜͡S͜͡A͜͡P͜͡P͜͡ B͜͡O͜͡T͜͡⍣☬⫸_";


async function loader(from, golden) {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    let res = await golden.sendMessage(from, { text: "○○○●●●" });

    res = await golden.sendMessage(from, { 
        text: "●●●●●●", 
        edit: res.key 
    });
    

    await golden.sendMessage(from, { 
        text: "𝙻𝙾𝙰𝙳𝙸𝙽𝙶...", 
        edit: res.key 
    });
}

// Fancy Text Conversion
const fancy = async (text) => {
    try {
        const response = await axios.get("http://qaz.wtf/u/convert.cgi", {
            params: { text },
        });
        const $ = cheerio.load(response.data);
        const results = [];

        $("table > tbody > tr").each(function () {
            results.push({
                name: $(this).find("td:nth-child(1) > h6 > a").text(),
                result: $(this).find("td:nth-child(2)").text().trim(),
            });
        });

        return results.map(item => item.result).join("\n");
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const getBuffer = async(url, options) => {
	try {
		options ? options : {}
		var res = await axios({
			method: 'get',
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(e)
	}
}

const getGroupAdmins = (participants) => {
	var admins = []
	for (let i of participants) {
		i.admin !== null  ? admins.push(i.id) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const h2k = (eco) => {
	var lyrik = ['', 'K', 'M', 'B', 'T', 'P', 'E']
	var ma = Math.log10(Math.abs(eco)) / 3 | 0
	if (ma == 0) return eco
	var ppo = lyrik[ma]
	var scale = Math.pow(10, ma * 3)
	var scaled = eco / scale
	var formatt = scaled.toFixed(1)
	if (/\.0$/.test(formatt))
		formatt = formatt.substr(0, formatt.length - 2)
	return formatt + ppo
}

const isUrl = (url) => {
	return url.match(
		new RegExp(
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
			'gi'
		)
	)
}

const Json = (string) => {
    return JSON.stringify(string, null, 2)
}

const runtime = (seconds) => {
	seconds = Number(seconds)
	var d = Math.floor(seconds / (3600 * 24))
	var h = Math.floor(seconds % (3600 * 24) / 3600)
	var m = Math.floor(seconds % 3600 / 60)
	var s = Math.floor(seconds % 60)
	var dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : ''
	var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : ''
	var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : ''
	var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : ''
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const sleep = async(ms) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

const fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

module.exports = { getBuffer, fancy, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep , fetchJson, loader}








