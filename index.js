function getLADataFromAPI(){
  
    var imageArray = [
      'https://www.brimg.net/images/gallery/jobs-employment/2015/states-with-highest-unemployment-rate/1-intro.jpg',
      'http://static.dnaindia.com/sites/default/files/2015/01/08/299596-unemployment-rna.jpg',
      'https://www.motherjones.com/files/unemployment_0.jpg',
      'http://www.motherjones.com/files/unemployment_0.jpg',
      'https://gcn.com/~/media/GIG/GCN/Redesign/Articles/2014/January/unemployment.png',
      'http://www.activistpost.com/wp-content/uploads/2016/01/unemployment.jpg',
      'http://images.wisegeek.com/unemployed-man-with-sign.jpg',
      'http://www.abc.net.au/cm/lb/7869962/data/young-people-protest-unemployment-data.jpg',
      'http://www.truthdig.com/images/made/images/cartoonuploads/2AD2743D-72E2-4CD4-8442-355D56D6BA46_590_408.jpg',
      'https://cdn.americanprogress.org/wp-content/uploads/2014/01/10094508/AP185179519353-620.jpg',
      'https://mjfellright.files.wordpress.com/2012/09/unemployment2.jpg',
      'https://blackbloggers.files.wordpress.com/2011/06/unemployed-pic-2.jpg',
    ]
    var endpoint = 'https://controllerdata.lacity.org/resource/7w5n-ybsg.json'

    fetch(endpoint)
    .then(function(data){
        return data.json()
    }) // turn data into JSOn
    .then(function(json){
        console.log(json)
        var finalHTML = ''
        json.forEach(function(item){
            var randomNumber = Math.floor(Math.random() * imageArray.length)
            var imageLink = imageArray[randomNumber]
            console.log(imageLink)
          
            var cardItem = `
                    <div class="col s6 m4">
                      <div class="card">
                        <div class="card-image">
                          <img class="same-size-image" src=${imageLink} />
                          <span class="card-title">${item.fiscal_year}</span>
                        </div>
                        <div class="card-content">
                          <p>
                            During this year there was a total of ${item.estimated_population}
                            people that lived in Los Angeles. The unemployment rate was ${item.unemployment_rate} % of the population.  
                            The median age of these people is of ${item.median_age} years old. 
                          </p>
                        </div>
                        <div class="card-action">
                        </div>
                      </div>
                    </div>
                  </div>            
            `
            finalHTML += cardItem
        })
        
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML = finalHTML
    }) // do something with data
    .catch(function(error){
        console.log(error)
    }) // catch any errors
}