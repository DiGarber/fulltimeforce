import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getCommits() {
    axios
      .get('/')
      .then((data) => data)
      .catch((e) => {
        throw new Error(e);
      });
  }
}
