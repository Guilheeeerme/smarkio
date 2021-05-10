const fs = require("fs");

import { resolve } from "path";
import { randomBytes } from "crypto";

const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
import { IamAuthenticator } from "ibm-watson/auth";

class IbmService {
  textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: process.env.API_KEY,
    }),
    serviceUrl: process.env.SERVICE_URL,
  });

  async getTextToSpeech(comment: string) {
    const params = {
      text: comment,
      accept: "audio/wav",
      voice: "pt-BR_IsabelaVoice",
    };

    const synthenize = await this.textToSpeech.synthesize(params);
    const file = this.generateFile(synthenize);

    return file;
  }

  generateFile(response) {
    const audio = response.result;
    const fileHash = randomBytes(16).toString("hex");

    const path = resolve(__dirname, "..", "..", "tmp", `${fileHash}.wav`);

    audio.pipe(fs.createWriteStream(path));

    return fileHash;
  }
}

export { IbmService };
