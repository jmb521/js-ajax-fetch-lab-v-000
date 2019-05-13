function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '5e39faa1106ffc271b419f2f3c2da03d04d2a1d6';
}

function forkRepo() {
  
  fetch("/api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks", {
    method: 'POST', 
    
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(resp => resp.json());
  .then(resp => showResults(resp));
}

function showResults(json) {
  console.log("json results: ", json)
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
