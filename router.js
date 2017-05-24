app.get('/loadMore',function(req,res) {
  var index = req.query.index
  var length = req.query.length
  var data = []
  if (index<30) {
    for (var i = 0; i < length; i++) {
      data.push('内容' + (parseInt(index) + i+1))
    }
  }else{
    data = []
  }
  
  setTimeout(send,300)
  function send(){
  	res.send({
      status:0,
      data:data
    })
  }
  // res.send({
  //     status: 0,
  //     data: data
  //   })


	// body...
})

app.post('/loadMore',function(req,res) {
  var index = req.body.index
  var length = req.body.length
  var data = []
  for (var i = 0; i < length; i++) {
  	data.push('内容' + (parseInt(index) + i+1))
  }
  setTimeout(send,1000)
  function send(){
  	res.send({
      status:0,
      data:data
    })
  }
  
	// body...
})