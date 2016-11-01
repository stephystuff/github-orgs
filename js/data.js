(function(){
  window.ns = window.ns || {};

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
      $.each(data, function addOneItemToUl(each){

      })
      // data.forEach(function addOneItemToUl(each){
      //   window.ns.addOneItemToUl();
      //   console.log(each);
      //})

    })
    .fail(function handleFailure(xhr) {
      // console.log(xhr);
    })
  })



})();
