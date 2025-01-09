
function write(response){
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 10,
      });
}

function searchResults(event){
    event.preventDefault()
    console.log(`love`)
    let topicElement = document.querySelector(`#text`)
    let topic = topicElement.value
    let key = `313bd4cf07a141554b6c1ta1037bbboc`
    let prompt = `make poem about ${topic}`
    let context = `make sure to make it less then 20 lines`
    let APIurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`

    new Typewriter("#poem", {
        strings: `wait`,
        autoStart: true,
        cursor: "",
        delay: 10,
      });
      console.log(topic)
    axios.get(APIurl).then(write)
}
let main = document.querySelector(`main`)
main.addEventListener(`change`,searchResults)
