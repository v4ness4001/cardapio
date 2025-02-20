const apiKey = "7473ea5de1a1a9200aae72c7c980c6c"
async function buscarCidade(cidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Cidade não encontrada');
        }
        
        const dados = await response.json();
        console.log(`Cidade: ${dados.name}`);
        console.log(`Temperatura: ${dados.main.temp}°C`);
        console.log(`Clima: ${dados.weather[0].description}`);
        console.log(`Umidade: ${dados.main.humidity}%`);
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro.message);
    }
}


    
