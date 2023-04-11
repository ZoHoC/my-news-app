import Head from "next/head";
import { useEffect, useState } from "react";
import HomepagePopup from "@/components/HomepagePopup/HomepagePopup";
import Header from "@/modules/Header/Header";
import Section from "@/components/Section/Section";
import NavBar from "@/modules/NavBar/NavBar";
import Grid from "@/components/Grid/Grid";
import LatestNews from "@/modules/LatestNews/LatestNews";
import { setWindowWidth } from "@/redux/reducer/windowSizeReducer";
import Article from "@/components/Article/Article";
import { fetchNewsData } from "@/redux/actions/fetchNewsDataAction";
import { useAppDispatch, useAppSelector } from "@/utility/hooks";
import ToggleNews from "@/modules/ToggleNews/ToggleNews";
import { NewsItem } from "@/redux/reducer/fetchNewsDataReducer";

export default function Buisness() {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const [data, setData] = useState<NewsItem[]>([]);

  const dispatch = useAppDispatch();
  const { windowWidth } = useAppSelector(state => state.windowSize);
  const { newsData } = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(setWindowWidth(window.innerWidth));
    dispatch(fetchNewsData());
  }, []);

  useEffect(() => {
    setData(newsData);
  }, [newsData]);

  useEffect(() => {
    const handleResize = () => dispatch(setWindowWidth(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const isDisplayedToken = localStorage.getItem("displayToken") === null;
    setIsDisplayed(isDisplayedToken);
  }, []);

  const handleSearch = (e: any) => {
    setData(
      newsData.filter(news =>
        news.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Head>
        <title>My News App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {windowWidth > 1200 && isDisplayed && (
        <HomepagePopup setIsDisplayed={setIsDisplayed} />
      )}
      <Header windowWidth={windowWidth} handleSearch={handleSearch} />
      {windowWidth < 768 && <ToggleNews windowWidth={windowWidth} />}
      <Section>
        {windowWidth > 768 && <NavBar />}
        <Grid title={windowWidth > 768 ? "News" : ""}>
          {windowWidth > 768 && <LatestNews />}
          {data
            .filter(item => item.section.toLocaleLowerCase() === "sports")
            .map(
              ({ section, title, imageCaption, imageUrl, author }, index) => (
                <Article
                  key={index}
                  title={title}
                  section={section}
                  imageCaption={imageCaption}
                  imageUrl={imageUrl}
                  author={author}
                />
              )
            )}
        </Grid>
      </Section>
    </>
  );
}
