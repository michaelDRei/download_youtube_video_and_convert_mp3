const fs = require("fs");
const path = require("path");
const directoryPath = "download";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Ocorreu um erro ao ler o diretório:"", err);

    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".webm") {
      fs.unlink(path.join(directoryPath, file), (err) => {
        if (err) {
          console.error(`Ocorreu um erro ao excluir o arquivo ${file}:`, err);
        } else {
          console.log(`Arquivo ${file} excluído com sucesso!`);
        }
      });
    }
  });
});
