var tipuesearch = {"pages": [{'title': '每周進度', 'text': '\n \n \n \n \n \n', 'tags': '', 'url': '每周進度.html'}, {'title': '第一周~第六周', 'text': '\n 安裝可攜系統 \n 安裝最新版本的Python \n 安裝完Msys2後先把主檔案複製到自己得隨身系統裡 \n 反安裝Msys2 目的是之後不受安裝路徑的控制 \n Python同上 \n 設定 start.bat裡的Msys2路徑 \n \n 用mingw64安裝 base-devel和gcc和make \n 編譯程式測試 \n \n // hello.c\n#include <stdio.h>\n\nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n} \n 生成一個hello.c\xa0 \n完成後用ming64執行hello.exe \n \n \n \n', 'tags': '', 'url': '第一周~第六周.html'}, {'title': '第六周~第九周 防疫期間', 'text': '\n \n 以Youtube + Portable OBS 利用 IPv6 進行直播測試 \n 分小組 \n 使用Google Meet 測試 \n \n 用月曆進行Meet的邀請 \n \n 使用OBS 直播畫面和Camera視訊 \n 在家上課 \n 期中考報告 \n \n', 'tags': '', 'url': '第六周~第九周 防疫期間.html'}, {'title': '第十周~第十一周', 'text': '\n 使用Python程式讀取學員選修檔案 把期中自評成績填上\n import csv\n \n# read student list\n \nfilename = \'E:/wcm2020/data/tmp/2020_spring_score/2a/2a_list.txt\'\nwith open(filename, encoding="utf-8") as f:\n    content = f.readlines()\n#print(content)\nstudent = [x.strip() for x in content] \n#print(student)\n \n \n# Timestamp, email, 修課名稱, url, score, desp, memo\n# 0, 1, 2, 3, 4, 5, 6\n#total = 0\nall = {}\nwith open(\'y:/2020midterm.csv\', encoding="utf-8") as csv_file:\n    csv_reader = csv.reader(csv_file, delimiter=\',\')\n    #print(csv_reader)\n \n    line_count = 0\n    for row in csv_reader:\n        if line_count == 0:\n            #print(f\'Column names are {", ".join(row)}\')\n            line_count += 1\n        else:\n            student_num = row[1].split("@")[0]\n            #print(student_num)\n            student_score = row[4]\n            #print(student_score)\n            try:\n                all.update({student_num: student_score})\n            except:\n                all.update({student_num: "error"})\n            #print(f\'\\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.\')\n            #print(f\'\\t{row[4]}\')\n            #total += int(row[4])\n            line_count += 1\n#print(all)\n#print(student)\n \n \nfor i in student:\n     \n    #if i in all:\n        #pass\n    #else:\n        #print(str(i))\n     \n    try:\n        print(i + "\\t" + all[i])\n    except:\n        print(i + "\\t60")\n \n    #print(f\'Processed {line_count} lines.\')\n    #print("平均=" + str(total/line_count)) \n \n \n 使用SSH來推檔案 \n \n \n 開啟 sh.exe \n ssh-keygen -t rsa -b 4096 -C  "使用者學號" \n 建立private key 和 public key \n 用SciTE 開 id_rsa.pub 後, 把 public key 的內容 複製到 Github的SSH and GPG keys\xa0 \n \n 用 puttygen.exe 將 id_rsa 轉成 Putty .ppk 格式 指定利用 putty 目錄下的 plink 執行 git 指令 \n \n 把start.bat 加入\n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n \n 用 puttygen.exe 載入 id_rsa. \n 開啟 puttygen 用 load 載入 id_rsa, 成功載入後 用 save private key 按紐 把 .ppk 存檔.\xa0 檔案要在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication \n \n 把.ssh中的config設定檔設為\n # no proxy at home\n#ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p\n# set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup\nProxyCommand y:/putty/plink.exe github.com %h %p\n  \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n     \n    # for connect.exe need openssh key format\n    #IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse"\n    # for plink.exe need rsa key format but set under putty github.com session\n    # plink.exe do not need the following setting\n    #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk"\n  \n    TCPKeepAlive yes\n    IdentitiesOnly yes \n \n', 'tags': '', 'url': '第十周~第十一周.html'}, {'title': '第十二周~第十五周', 'text': '', 'tags': '', 'url': '第十二周~第十五周.html'}]};