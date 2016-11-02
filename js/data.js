(function(){
  window.ns = window.ns || {};

// Function for token authorization to receive GitHub data
  $('button')
  .on('click', function getAuthorization (eventObj){
    var myToken = $('input').val();
    $.ajax({
      url: 'https://api.github.com/users/rposborne/orgs',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'token ' + myToken
      }
    })
    .done(function handleSuccess(data){
       

      data.forEach(function addOneItemToUl(each){
        window.ns.addOneItemToUl();
        console.log(each);
      })

    })
    .fail(function handleFailure(xhr) {
      // console.log(xhr);
    })
  })



})();
