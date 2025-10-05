# demo-ui
  # 建立映像檔
  docker build -t demo-ui .

  # 執行容器
  docker run -d -p 666:666 --restart always --name demo-ui demo-ui