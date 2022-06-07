import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getCommits(): any {
    const commits = axios
      .get('https://api.github.com/repos/DiGarber/fulltimeforce/commits')
      .then((data) => {
        return data.data;
      })
      .catch((e) => {
        throw new Error(e);
      });
    return commits;
  }
}
