## 安装docker

```
apt-get update
```

> 报错： 由于没有公钥，无法验证下列签名： NO_PUBKEY 
>
> 解决：sudo apt-get install debian-archive-keyring 

- 安装http依赖

debian 8 / 9

```
apt install apt-transport-https ca-certificates curl gnupg2 lsb-release software-properties-common
```

debian 7

```shell
apt install apt-transport-https ca-certificates curl lsb-release python-software-properties
```

- 配置Docker存储库密钥

```
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/debian/gpg | sudo apt-key add -
add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/debian $(lsb_release -cs) stable"
```

```
apt-get update
```

- 安装

```
apt-get install docker-ce
```

> 常用命令
>
> 查看docker容器日志：docker logs --tail=1000 容器名
>
> 进入容器：docker exec -it '容器名' bash
>
> 重启docker：systemctl restart docker

## 安装Jenkins

```
docker pull jenkins/jenkins
```

- 创建Jenkins挂载目录并赋予权限

  ```
  //创建目录
  mkdir -p /var/jenkins_home
  //授权权限
  chmod 777 /var/jenkins_home
  ```

- 启动Jenkins容器

  ```
  docker run -uroot -d -p 10240:8080 -p 10241:50000 -v /var/jenkins_home:/var/jenkins_home -v /etc/localtime:/etc/localtime --name myjenkins jenkins/jenkins
  ```

- 浏览器访问Jenkins页面

  192.168.XX.XX:10240

> 报错
>
> 192.168.XX.XX:10240/pluginManager/advanced，更改路径https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json
>
> 192.168.XX.XX:10240/manage/configureSecurity/，禁用代理

自动化部署：
https://juejin.cn/post/7127302949797101604#heading-22
https://blog.csdn.net/ming19951224/article/details/109633920

## 安装phpstudy

https://www.xp.cn/linux.html