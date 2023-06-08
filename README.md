# download_youtube_video

## Descrição:

O download_youtube_video é uma aplicação desenvolvida para facilitar o download de vídeos do YouTube e também permite a conversão desses vídeos para o formato MP3.

Como usar:

Certifique-se de ter o Node.js (Versão maior que 17.0) instalado no seu sistema.

Clone ou baixe o repositório do **download_youtube_video**.

Abra o terminal e navegue até o diretório do projeto.

Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

**lembrete**
Se estiver usando linux certifique-se de que a lib **ffmpeg** esta instalada.
Caso não esteja instalada (ubuntu e derivados):

```bash
  apt update && apt install -y ffmpeg
```
Após a instalação das dependências, você pode usar a aplicação de duas maneiras:

## Download de vídeo do YouTube:

Execute o seguinte comando no terminal:

```bash
node src/download.js
```

Informe a URL do vídeo que você deseja baixar (voce pode passar mais de uma URL as separando por virgula).

O vídeo será baixado no diretório **downloads** do projeto.

## Conversão para MP3:

Execute o seguinte comando no terminal:

```bash
node src/convert_mp3.js
```

O arquivo MP3 será gerado no diretório **download/mp3** do projeto.

Se quiser excluir os vídeos baixados, todos de uma só vez:

```bash
node src/delete_videos.js
```

Desta forma, você pode usar o **download_youtube_video** para baixar vídeos do YouTube e converter para o formato MP3 de forma fácil e conveniente. Aproveite!
