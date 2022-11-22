import {
  FalconImage,
  TitleWrapper,
  FirstPart,
  TextWrapper,
  HomepageWrapper,
} from "./Home.style";

const Home = () => {
  return (
    <HomepageWrapper>
      <FirstPart>
        <TitleWrapper>Data Visualization Application</TitleWrapper>
        <FalconImage />
      </FirstPart>
      <TextWrapper>
        For the purpose of clarity and improved user experience of the data
        visualizations this application picks one data item out of every hundred
        items, due to a huge amount of data, which barely results in a
        user-friendly view of the charts. This could also affect data analysis
        negatively.
        <br /> It is important to mention that the timeseires is developed in
        minutes and it is relative to the startpoint. Simply put we can see the
        values evolving over every hundred minutes from the begining of the
        cultivation process.
        <br /> You can just click on the Charts or Aggregations tab on the top
        of the page to see the relavant results.
      </TextWrapper>
    </HomepageWrapper>
  );
};

export default Home;
