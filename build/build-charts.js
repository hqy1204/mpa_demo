const path = require("path")
const fs = require("fs-extra");
const yaml = require('js-yaml');
const { APP_ENV } = process.env

let rootPath = path.join(__dirname, `../charts`);
const file = fs.readdirSync(rootPath);
const filePath = path.join(__dirname, `../charts/${file[0]}/values.yaml`);

let contents = fs.readFileSync(filePath, 'utf-8');
let data = yaml.safeLoad(contents);

const groupName = data.groupName
const projectName = data.projectName

// 仓库初始化
data.image.repository = `harbor.prod.k8s.lesso.com/operation-${groupName}/${projectName}`
data.image.docsRepository = `harbor.prod.k8s.lesso.com/operation-${groupName}/${projectName}-docs`
    // 更改名字
data.service.web.name = `${projectName}`
data.service.web_docs.name = `${projectName}-docs`
if (APP_ENV == 'dev') {
    // 修改域名
    data.ingress.web.host = `${groupName}.${projectName}.172.16.90.27.xip.io`
    data.ingress.web_docs.host = `${groupName}.${projectName}-docs.172.16.90.27.xip.io`
    data.matchExpressions.values[0] = 'dev-work-app'
        // docs服务开启
    data.service.web_docs.enable = true
    data.ingress.web_docs.enable = true
    data.deployment.web_docs.enable = true
} else if (APP_ENV == 'qas') {
    // 修改域名
    data.ingress.web.host = `${groupName}.${projectName}.172.16.90.28.xip.io`
    data.ingress.web_docs.host = `${groupName}.${projectName}-docs.172.16.90.28.xip.io`
    data.matchExpressions.values[0] = 'uat-work-app'
        // docs服务关闭
    data.service.web_docs.enable = false
    data.ingress.web_docs.enable = false
    data.deployment.web_docs.enable = false
}
let yamlStr = yaml.safeDump(data);
fs.writeFileSync(filePath, yamlStr, 'utf-8');