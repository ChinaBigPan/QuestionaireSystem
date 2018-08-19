import path from 'path';
import _ from 'lodash';

// 配置
let config = {
  "viewDir": path.join(__dirname, '../views'),
  "staticDir": path.join(__dirname, '../assets')
}

// 初始化环境
const init = () => {
  if (process.env.NODE_ENV == "development") {
    const localConfig = {
      port: 8081
    }
    config = _.extend(config, localConfig);
  } else if (process.env.NODE_ENV == "production") {
    const proConfig = {
      port: 8082
    }
    config = _.extend(config, proConfig);
  }
  return config;
}


const result = init();
export default result;