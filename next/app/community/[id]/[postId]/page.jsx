import styles from "./writing_detail.module.css";
import RightDoubleArrow from "../../../../public/svg/rightDoubleArrow.svg";
import RightArrow from "../../../../public/svg/rightArrow.svg";
import ThumbsUp from "../../../../public/svg/thumbsUp.svg";
import ThumbsDown from "../../../../public/svg/thumbsDown.svg";
import CommentSvg from "../../../../public/svg/comment.svg";
import ImageSvg from "../../../../public/svg/image.svg";
import Smile from "../../../../public/svg/smile.svg";
import Arrow from "@/components/Arrow";
import Menubar from "@/components/Menubar";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Post(props) {
  let db = (await connectDB).db("SRH-Community");
  let data = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.postId) });
  console.log(data);
  return (
    <div>
      <header className={styles.cafe_header}>
        <div className={styles.cafe_inner}>
          <div className={styles.cafe_actions}>
            <Arrow location="/" mod={2} />
            <div className={styles.cafe_menu}>
              <div className={styles.cafe_menu_wrap}>
                <Menubar></Menubar>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.write_d_main_container}>
          <div className={styles.write_d_main_top}>
            <div className={styles.write_d_board}>
              <a href="">자유게시판 </a>
            </div>
            <div className={styles.write_d_title}>부장 국XX을 폭로합니다</div>
            <div className={styles.write_d_userinfo}>
              <div className={styles.write_d_user_img}>
                <img src="../../../../public/images/profile.png" />
              </div>
              <div className={styles.write_d_user_subbox}>
                <div className={styles.write_d_user_name}>커피중독자</div>
                <div className={styles.write_d_date}>
                  2023.09.17 06:19 조회 57
                </div>
              </div>
            </div>
          </div>
          <div className={styles.write_d_main}>
            <div className={styles.write_d_writing}>
              <div className={styles.write_d_writing_img}>
                <img src="../../../../public/images/etsuki.png" />
              </div>
              <div className={styles.write_d_writing_bottom}>
                <div className={styles.write_d_text}>정실은 이츠키</div>
              </div>
              <div className={styles.write_d_writing_main}>
                국XX의 비밀 폴더
              </div>
              <div className={styles.write_d_writing_usermore}>
                <div className={styles.write_d_usermore_img}>
                  <img src="../../../../public/images/profile.png" />
                </div>
                <div className={styles.write_d_usermore_subbox}>
                  <div className={styles.write_d_usermore_name}>
                    {data.writer}
                  </div>
                  <div className={styles.write_d_user_name_sub}>
                    님의 게시글 더 보기
                  </div>
                </div>
              </div>
              <div className={styles.write_d_write_info}>
                <div className={styles.write_d_thumbs_up}>
                  {/*<i className={`${styles.fa-regular} ${styles.fa-thumbs-up}`}></i>*/}
                  <ThumbsUp></ThumbsUp>
                  추천 {data.good}
                </div>
                <div className={styles.write_d_thumbs_down}>
                  {/*<i className={`${styles.fa-regular} ${styles.fa-thumbs-down}`}></i>*/}
                  <ThumbsDown></ThumbsDown>
                  비추천 {data.bad}
                </div>
                <div className={styles.write_d_reply_count}>
                  {/*<i className={`${styles.fa-regular} ${styles.fa-comment}`}></i>*/}
                  <CommentSvg></CommentSvg>
                  댓글 {data.commnet}
                </div>
              </div>
              <div className={styles.write_d_reply_list}>
                <div className={styles.write_d_reply_top}>
                  댓글
                  <div className={styles.write_d_reply_sort}>
                    <div className={styles.enabled_sort}>등록순</div>
                    <div className={styles.disabled_sort}>최신순</div>
                  </div>
                </div>
                <div className={styles.write_d_reply_list_sub}>
                  <div className={styles.write_d_reply_container}>
                    {/*<!--댓글 시작 부분-->*/}
                    <div className={styles.write_d_reply}>
                      <div className={styles.write_d_reply_left}>
                        <img src="../../../../public/images/profile.png" />
                      </div>
                      <div className={styles.write_d_reply_right}>
                        <div className={styles.write_d_reply_username}>
                          돌하르방
                        </div>
                        <div className={styles.write_d_reply_main}>
                          글 내리세요.
                        </div>
                        <div className={styles.write_d_reply_date}>
                          2023.09.17 06:25 조회 25 답글쓰기
                        </div>
                      </div>
                    </div>
                    {/*<!--답글 시작 부분-->*/}
                    <div className={styles.write_d_comment}>
                      <div className={styles.write_d_reply}>
                        <div className={styles.write_d_reply_left}>
                          <img src="../../../../public/images/profile.png" />
                        </div>
                        <div className={styles.write_d_reply_right}>
                          <div className={styles.write_d_reply_username}>
                            우주갓겜 이터널리턴
                          </div>
                          <div className={styles.write_d_reply_main}>
                            통한의 비추 1 주인 등장ㅋㅋ
                          </div>
                          <div className={styles.write_d_reply_date}>
                            2023.09.17 06:25 조회 25 답글쓰기
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.write_d_reply}>
                      <div className={styles.write_d_reply_left}>
                        <img src="../../../../public/images/profile.png" />
                      </div>
                      <div className={styles.write_d_reply_right}>
                        <div className={styles.write_d_reply_username}>
                          이소상무공주머니
                        </div>
                        <div className={styles.write_d_reply_main}>섹</div>
                        <div className={styles.write_d_reply_date}>
                          2023.09.17 06:25 조회 25 답글쓰기
                        </div>
                      </div>
                    </div>
                    <div className={styles.write_d_reply}>
                      <div className={styles.write_d_reply_left}>
                        <img src="../../../../public/images/profile.png" />
                      </div>
                      <div className={styles.write_d_reply_right}>
                        <div className={styles.write_d_reply_username}>
                          브로냐의 야벅지 어우 쫩쫩
                        </div>
                        <div className={styles.write_d_reply_main}>
                          와캬파농쭉 쭉빵빵 냠냠
                        </div>
                        <div className={styles.write_d_reply_date}>
                          2023.09.17 06:25 조회 25 답글쓰기
                        </div>
                      </div>
                    </div>
                    <div className={styles.write_d_reply}>
                      <div className={styles.write_d_reply_left}>
                        <img src="../../../../public/images/profile.png" />
                      </div>
                      <div className={styles.write_d_reply_right}>
                        <div className={styles.write_d_reply_username}>
                          장미새
                        </div>
                        <div className={styles.write_d_reply_main}>
                          롤체 빌지워터 ㅈㄴ 재밌음 다들 해보셈
                        </div>
                        <div className={styles.write_d_reply_date}>
                          2023.09.17 06:25 조회 25 답글쓰기
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.write_d_reply_writing}>
                <div className={styles.write_d_username}>정삼복</div>
                <div className={styles.write_d_comment_detail}>
                  <div className={styles.write_d_comment_detail_main}>
                    <div className={styles.write_d_comment_detail_input}>
                      <input
                        className={`${styles.set_input} ${styles.set_info_input}`}
                        type="text"
                        placeholder="댓글을 남겨보세요"
                      />
                    </div>
                    <div className={styles.comment_detail_sub}>
                      <div className={styles.comment_detail_sub_1}>
                        {/*<i className={`${styles.fa-regular} ${styles.fa-image}`}></i>*/}
                        <ImageSvg></ImageSvg>
                        {/*<i className={`${styles.fa-regular} ${styles.fa-face-smile}`}></i>*/}
                        <Smile></Smile>
                      </div>
                      <div className={styles.comment_detial_sub_2}>
                        <button>작성</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.write_d_reply_writing_sub}>
                <div className={styles.write_d_reply_writing_sub_write}>
                  글쓰기
                </div>
                <div className={styles.write_d_reply_writing_sub_comment}>
                  답글
                </div>
              </div>
              <div className={styles.write_d_post_list}>
                <div className={styles.write_d_post_list_top}>전체 글</div>
                <div className={styles.write_d_post_list_main}>
                  <div className={styles.write_d_post_list_object}>
                    <div className={styles.write_d_post_list_category}>
                      공지
                    </div>
                    <div className={styles.write_d_post_list_title}>
                      아 시발 일하기 존나 싫네
                    </div>
                    <div className={styles.write_d_post_list_username}>
                      우주갓겜 이터널리턴
                    </div>
                    <div className={styles.write_d_post_list_date}>
                      2023.09.19
                    </div>
                    <div className={styles.write_d_post_list_view}>1324</div>
                    <div className={styles.write_d_post_list_thumbsup}>3</div>
                  </div>
                  <div className={styles.write_d_post_list_object}>
                    <div className={styles.write_d_post_list_category}>
                      공지
                    </div>
                    <div className={styles.write_d_post_list_title}>
                      아 재윤국 시발시치
                    </div>
                    <div className={styles.write_d_post_list_username}>
                      우주갓겜 이터널리턴
                    </div>
                    <div className={styles.write_d_post_list_date}>
                      2023.09.19
                    </div>
                    <div className={styles.write_d_post_list_view}>1324</div>
                    <div className={styles.write_d_post_list_thumbsup}>3</div>
                  </div>
                  <div className={styles.write_d_post_list_object}>
                    <div className={styles.write_d_post_list_category}>
                      베스트
                    </div>
                    <div className={styles.write_d_post_list_title}>
                      정실은 니노라고 시발
                    </div>
                    <div className={styles.write_d_post_list_username}>
                      정삼복
                    </div>
                    <div className={styles.write_d_post_list_date}>
                      2023.09.19
                    </div>
                    <div className={styles.write_d_post_list_view}>1334</div>
                    <div className={styles.write_d_post_list_thumbsup}>10</div>
                  </div>
                  <div className={styles.write_d_post_list_object}>
                    <div className={styles.write_d_post_list_category}>
                      자유
                    </div>
                    <div className={styles.write_d_post_list_title}>
                      아무리 봐도 정실은 이츠키다
                    </div>
                    <div className={styles.write_d_post_list_username}>
                      마시쪄
                    </div>
                    <div className={styles.write_d_post_list_date}>
                      2023.09.19
                    </div>
                    <div className={styles.write_d_post_list_view}>1324</div>
                    <div className={styles.write_d_post_list_thumbsup}>15</div>
                  </div>
                  <div className={styles.write_d_post_list_object}>
                    <div className={styles.write_d_post_list_category}>
                      자유
                    </div>
                    <div className={styles.write_d_post_list_title}>
                      근데 나는 미쿠가 좋음
                    </div>
                    <div className={styles.write_d_post_list_username}>
                      이소상 무공주머니
                    </div>
                    <div className={styles.write_d_post_list_date}>
                      2023.09.19
                    </div>
                    <div className={styles.write_d_post_list_view}>135434</div>
                    <div className={styles.write_d_post_list_thumbsup}>-5</div>
                  </div>
                  <div className={styles.write_d_post_list_object}>
                    <div className={styles.write_d_post_list_category}>
                      자유
                    </div>
                    <div className={styles.write_d_post_list_title}>
                      각청 죽순 쭈왑 쭈왑 와랄랄라 마렵다
                    </div>
                    <div className={styles.write_d_post_list_username}>
                      마시쪄
                    </div>
                    <div className={styles.write_d_post_list_date}>
                      2023.09.19
                    </div>
                    <div className={styles.write_d_post_list_view}>13234</div>
                    <div className={styles.write_d_post_list_thumbsup}>
                      -1972
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.page_selector}>
                <div className={styles.page_selector_box}>
                  <div className={styles.community_pages}>1</div>
                  <div className={styles.community_pages}>2</div>
                  <div className={styles.community_pages}>3</div>
                  <div className={styles.community_pages}>4</div>
                  <div className={styles.community_pages}>5</div>
                  <div className={styles.community_pages}>6</div>
                  <div className={styles.community_pages}>7</div>
                  <div className={styles.community_pages}>8</div>
                  <div className={styles.community_pages}>9</div>
                  <div className={styles.community_pages}>10</div>
                  <RightArrow className={styles.community_pages}></RightArrow>
                  <RightDoubleArrow
                    className={styles.community_pages}
                  ></RightDoubleArrow>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
