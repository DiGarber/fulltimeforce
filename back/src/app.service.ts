import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getCommits(): any {
    const commits = axios
      .get('https://api.github.com/repos/harrisiirak/cron-parser/commits')
      .then((data) => {
        console.log(data.data[0].commit.message);
        return data.data;
      })
      .catch((e) => {
        throw new Error(e);
      });
    return commits;
  }
}
