const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const folder = "download";

fs.readdir(folder, (err, files) => {
  if (err) {
    console.error("Erro ao ler a pasta:", err);
    return;
  }

  console.log("Iniciando conversão para MP3");

  files.forEach((file) => {
      console.log(`Convertendo ${file}`)

    if(file != "mp3") {
      ffmpeg(`${folder}/${file}`)
        .output(`${folder}/mp3/${file}.mp3`)
        .noVideo()
        .audioCodec("libmp3lame")
        .on('end', () => {
          console.log("Conversão concluída!");
        })
        .on('error', (err) => {
          console.error("Ocorreu um erro durante a conversão:", err);
        })
        .run();
    }
  });
});
