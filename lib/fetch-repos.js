const request = require('request');
const colors = require('colors');
const ora = require('ora');

const transformReposData = function(repos) {
  return repos.map(function(repo) {
    const val = `${repo.name.blue} - ${repo.description}`;
    return {
      id: val,
      name: val,
      html_url: repo.html_url,
      homepage: repo.homepage,
    };
  });
};

function fetchRepos() {
  return new Promise(function(resolve, reject) {
    request({
      url: 'https://api.github.com/users/WorkPlusFE/repos',
      headers: {
        'User-Agent': '@w6s/fedd'
      }
    }, function (err, res, body) {
      if (err) console.log(err)
      var result = JSON.parse(body)
      if (Array.isArray(result)) {
        resolve(transformReposData(result));
      } else {
        console.error(result.message)
      }
    });
  });
};

module.exports = fetchRepos;
