import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="header">
        <Navbar shouldHideOnScroll>
          <NavbarBrand>
            <h1 className="text-xl">YEJI PORTFOLIO</h1>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link href="#about" className="hover:text-[#755139]">
                about
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#projects" className="hover:text-[#755139]">
                projects
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#contact" className="hover:text-[#755139]">
                contact
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </header>
      <main>
        <section className="main">
          <div className="container text-[#161b21]">
            <article>
              <h1 className="text-8xl font-bold drop-shadow-xl">
                YEJI PORTFOLIO
              </h1>
              <h2 className="text-4xl font-semibold drop-shadow-xl">
                Front-end Developer
              </h2>
            </article>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container p-8 ">
            <p className="text-center font-semibold text-3xl drop-shadow-md">
              about
            </p>
            <Divider className="my-4" />
            <article className="grid gap-4 grid-cols-2">
              <Card>
                <CardBody className="my-3">
                  <p className="underline decoration-indigo-500 hover:decoration-red-400 text-center text-xl my-3">
                    About
                  </p>
                  <ul className="marker:text-indigo-400 list-disc pl-5 space-y-3">
                    <li>박예지</li>
                    <li>경기도 시흥시</li>
                    <li>1995. 10. 21.</li>
                  </ul>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="my-3">
                  <p className="underline decoration-indigo-500 hover:decoration-red-400 text-center text-xl my-3">
                    Skills
                  </p>
                  <ul className="marker:text-indigo-400 list-disc pl-5 space-y-3">
                    <li>
                      <span>Front-end</span>
                      <ul className="grid gap-1 *:rounded-full *:border *:border-indigo-100 *:bg-indigo-50 *:px-2 *:py-0.5 dark:text-indigo-300 dark:*:border-indigo-500/15 dark:*:bg-indigo-500/10 flex flex-wrap">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>TypeScript</li>
                      </ul>
                    </li>
                    <li>
                      <span>Back-end</span>
                      <ul className="grid gap-1 *:rounded-full *:border *:border-indigo-100 *:bg-indigo-50 *:px-2 *:py-0.5 dark:text-indigo-300 dark:*:border-indigo-500/15 dark:*:bg-indigo-500/10 flex flex-wrap">
                        <li>Java</li>
                        <li>JSP</li>
                        <li>Spring Boot</li>
                        <li>SQL</li>
                        <li>JPA</li>
                      </ul>
                    </li>
                    <li>
                      <span>클라우드 플랫폼</span>
                      <ul className="grid gap-1 *:rounded-full *:border *:border-indigo-100 *:bg-indigo-50 *:px-2 *:py-0.5 dark:text-indigo-300 dark:*:border-indigo-500/15 dark:*:bg-indigo-500/10 flex flex-wrap">
                        <li>AWS</li>
                      </ul>
                    </li>
                    <li>
                      <span>버전 관리 시스템</span>
                      <ul className="grid gap-1 *:rounded-full *:border *:border-indigo-100 *:bg-indigo-50 *:px-2 *:py-0.5 dark:text-indigo-300 dark:*:border-indigo-500/15 dark:*:bg-indigo-500/10 flex flex-wrap">
                        <li>Git</li>
                      </ul>
                    </li>
                    <li>
                      <span>디자인 툴</span>
                      <ul className="grid gap-1 *:rounded-full *:border *:border-indigo-100 *:bg-indigo-50 *:px-2 *:py-0.5 dark:text-indigo-300 dark:*:border-indigo-500/15 dark:*:bg-indigo-500/10 flex flex-wrap">
                        <li>Figma</li>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                      </ul>
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="my-3">
                  <p className="underline decoration-indigo-500 hover:decoration-red-400 text-center text-xl my-3">
                    Education
                  </p>
                  <ul className="marker:text-indigo-400 list-disc pl-5 space-y-3">
                    <li>
                      웹표준디지털디자인(웹디자인&웹퍼블리셔)
                      <br />
                      2019-03 ~ 2019-09
                    </li>
                    <li>
                      자바(JAVA) 웹개발 프로그래밍
                      <br />
                      2022-12 ~ 2022-05
                    </li>
                  </ul>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="my-3">
                  <p className="underline decoration-indigo-500 hover:decoration-red-400 text-center text-xl my-3">
                    Experience
                  </p>
                  <ul className="marker:text-indigo-400 list-disc pl-5 space-y-3">
                    <li>
                      Web Publishing
                      <br />
                      2021-02 ~ 2021-08
                    </li>
                    <li>
                      Software Development
                      <br />
                      2023-11 ~ 2024-02
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </article>
          </div>
        </section>
        <section id="projects" className="projects">
          <div className="container p-8">
            <p className="text-center font-semibold text-3xl drop-shadow-md">
              projects
            </p>
            <Divider className="my-4" />
            <div className="grid gap-4">
              <article>
                <Card>
                  <CardHeader className="flex flex-col">
                    <h3 className="underline decoration-indigo-500 hover:decoration-red-400 text-center text-xl my-3">
                      Coffee Store
                    </h3>
                    <p>React Project</p>
                    <Divider className="my-4" />
                  </CardHeader>
                  <CardBody>
                    <Image
                      isZoomed
                      alt="cafe images"
                      src="/yeji-git.github.io/cafe.png"
                    />
                  </CardBody>
                  <CardFooter className="flex flex-col">
                    <div>
                      <p>기능</p>
                      <ul className="marker:text-indigo-400 list-disc pl-5 space-y-3">
                        <li>로그인 / 회원가입</li>
                        <li>상품 장바구니 담기 / 구매</li>
                        <li>구매한 상품 리뷰 작성</li>
                        <li>리뷰 / 공지사항</li>
                      </ul>
                    </div>
                    <Divider className="my-4" />
                    <Button
                      href="https://cafe-alpha-six.vercel.app/"
                      as={Link}
                      color="primary"
                      variant="solid"
                      target="_blank"
                    >
                      보러 가기
                      <Image
                        className="w-4"
                        alt="mouse images"
                        src="/yeji-git.github.io/mouse-icon.svg"
                      ></Image>
                    </Button>
                  </CardFooter>
                </Card>
              </article>
              <article>
                <Card>
                  <CardHeader className="flex flex-col">
                    <h3 className="underline decoration-indigo-500 hover:decoration-red-400 text-center text-xl my-3">
                      Portfolio
                    </h3>
                    <p>Next.js Project</p>
                    <Divider className="my-4" />
                  </CardHeader>
                  <CardBody>
                    <Image
                      isZoomed
                      alt="portfolio images"
                      src="/yeji-git.github.io/portfolio.png"
                    />
                  </CardBody>
                  <CardFooter className="flex flex-col">
                    <div></div>
                    <Divider className="my-4" />
                  </CardFooter>
                </Card>
              </article>
              <article>
                <Card>
                  <CardHeader className="flex flex-col">
                    <h3 className="underline decoration-indigo-500 hover:decoration-red-400 text-center text-xl my-3">
                      오목
                    </h3>
                    <p>JavaScript Project</p>
                    <Divider className="my-4" />
                  </CardHeader>
                  <CardBody>
                    <Image
                      isZoomed
                      alt="omok images"
                      src="/yeji-git.github.io/omok.png"
                    />
                  </CardBody>
                  <CardFooter className="flex flex-col">
                    <div></div>
                    <Divider className="my-4" />
                    <Button
                      href="./omok/index.html"
                      as={Link}
                      color="primary"
                      variant="solid"
                      target="_blank"
                    >
                      보러 가기
                      <Image
                        className="w-4"
                        alt="mouse images"
                        src="/yeji-git.github.io/mouse-icon.svg"
                      ></Image>
                    </Button>
                  </CardFooter>
                </Card>
              </article>
              <article>
                <Card>
                  <CardHeader className="flex flex-col">
                    <h3 className="underline decoration-indigo-500 hover:decoration-red-400 text-center text-xl my-3">
                      Book Search
                    </h3>
                    <p>API Project</p>
                    <Divider className="my-4" />
                  </CardHeader>
                  <CardBody>
                    <Image
                      isZoomed
                      alt="book search images"
                      src="/yeji-git.github.io/booksearch.png"
                    />
                  </CardBody>
                  <CardFooter className="flex flex-col">
                    <div></div>
                    <Divider className="my-4" />
                    <Button
                      href="./booksearch/index.html"
                      as={Link}
                      color="primary"
                      variant="solid"
                      target="_blank"
                    >
                      보러 가기
                      <Image
                        className="w-4"
                        alt="mouse images"
                        src="/yeji-git.github.io/mouse-icon.svg"
                      ></Image>
                    </Button>
                  </CardFooter>
                </Card>
              </article>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container p-8 text-[white]">
            <p className="font-semibold text-3xl drop-shadow-md">contact</p>
            <Divider className="my-4" />
            <article>
              <ul>
                <li>📞 010-6472-2135</li>
                <li>✉️ 1995.10.21@hanmail.net</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
