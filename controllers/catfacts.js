function getFact(req, res) {
  fetch("https://catfact.ninja/fact")
  .then(res=>res.json())
  .then(fact=>{
    res.render("cats/fact", fact)
    console.log(fact);
  })

}

module.exports = {
  getFact
}