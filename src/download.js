const fs = require("fs");
const readline = require("readline");
const { exec } = require("youtube-dl-exec");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a url dos videos que deseja baixar: ", (value) => {
  let values = value.split(",");

  for(var index = 0; index < values.length; index ++){
    console.log(`Iniciando download para o link ${values[index]}`);

    download(values[index]);
  }
  rl.close();
});

function download(videoURL) {
  const filename = videoURL.split("watch?v=");

  console.log("Aguarde! o video esta sendo baixado.");

  (async () => {
    try {
      const outputFilePath = `download/${filename[1]}`;
      await exec(videoURL, {
        output: outputFilePath,
        format: "bestvideo+bestaudio",
      });
      console.log("Download concluído!");

      console.log(`Arquivo ${filename[1]}.webm criado na pasta download`);
    } catch (error) {
      console.error("Ocorreu um erro durante o download:", error);
    }
  })();
}
