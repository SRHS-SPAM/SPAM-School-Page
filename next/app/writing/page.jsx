<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../../css/styles.css" />
    <title>Writing</title>
  </head>
  <body>
    <!-- Header -->
    <header class="writing_header">
      <div class="writing_inner">
        <div class="writing_actions">
          <div class="arrow">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
          </div>

          <div class="writing_menu">
            <div class="writing-menu-wrap">
              <div class="bars" id="bar" onclick="floatBar()">
                <div class="menuline-horizontal"></div>
                <div class="menuline-horizontal"></div>
                <div class="menuline-horizontal"></div>
              </div>

              <div class="menubar" id="menubar_f">
                <div class="menu_top">
                  <div class="menubar_line">
                    <div class="menubar_menuline" onclick="floatBar()">
                      <div class="menubar_menuline1"></div>
                      <div class="menubar_menuline2"></div>
                      <div class="menubar_menuline3"></div>
                    </div>
                  </div>
                </div>
                <div class="menu_bottom">
                  <div class="menu-bottom-right">
                    <a href="mypage.html">
                      <div class="menu_column">마이페이지</div>
                    </a>
                    <a href="setting.html">
                      <div class="menu_column">설정</div>
                    </a>
                    <a href="contactus.html">
                      <div class="menu_column">문의하기</div>
                    </a>
                    <a href="#">
                      <div class="menu_column">로그아웃</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main -->

    <main class="writing_main">
      <div class="writing_base">
        <div class="writing_title">
          <input
            class="writing_titleinput"
            type="text"
            placeholder="제목 작성"
          />
        </div>

        <div class="writing_tag">
          <input class="writing_taginput" type="text" placeholder="태그" />
        </div>

        <div class="writing_par">
          <textarea
            class="writing_partextarea"
            cols="30"
            rows="10"
            placeholder="글 쓰기"
          ></textarea>
        </div>
      </div>
    </main>

    <script src="../../js/menu.js"></script>
  </body>
</html>
