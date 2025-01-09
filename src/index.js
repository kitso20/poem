
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
    let poem = document.querySelector(`#poem`)
    poem.classList.add(`poem`)
    let topic = topicElement.value
    let key = `313bd4cf07a141554b6c1ta1037bbboc`
    let prompt = `make poem about ${topic}`
    let context = `generate a less than 15 line poem and separate each line with a <br />, add <a><strong>Shecodes AI</strong></a? at the end`
    let APIurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`

    new Typewriter("#poem", {
        strings: `Generating Poem...`,
        autoStart: true,
        delay: 100,
      });
      console.log(topic)
    axios.get(APIurl).then(write)
}
let main = document.querySelector(`main`)
main.addEventListener(`change`,searchResults)
