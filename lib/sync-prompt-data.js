const path = require('path');
const fs = require('fs');
const GithubContent = require('github-content');

function syncPromptData(fail, success) {
  const options = {
    owner: 'WorkPlusFE',
    repo: 'fedd',
    branch: 'master',
  };
  
  const gc = new GithubContent(options);
  
  gc.file('prompt.json', function(err, file) {
    if (err) return fail(err);
    if (file) {
      fs.writeFile(
        path.resolve(__dirname, '../prompt.json'), 
        file.contents.toString(), 
        function(err) {
          if (err) fail(err);
          success();
        });
    }
  });
};

module.exports = syncPromptData;
