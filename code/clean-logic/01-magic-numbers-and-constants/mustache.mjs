// this file can be run using Node 18.2.0 or later and the following command:
// `node --experimental-network-imports mustache.mjs`

import Mustache from 'https://cdn.jsdelivr.net/npm/mustache@4.2.0/mustache.mjs';

var business = {
    name: "LinkedIn",
    url: "https://linkedin.com"
};

var html = Mustache.render(
    '<h1><a href="{{url}}">{{name}}</a></h1>',
    business
);  

console.log(html);
