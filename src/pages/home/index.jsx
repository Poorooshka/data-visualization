import {
  FalconImage,
  TitleWrapper,
  FirstPart,
  TextWrapper,
  HomepageWrapper,
  FooterImage,
} from "./style";

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
        <br /> It is important to mention that the timeseries is developed in
        minutes and it is relative to the startpoint. Simply put we can see the
        values evolving over every twenty minutes from the beginning of the
        cultivation process.
      </TextWrapper>
      <FooterImage />
    </HomepageWrapper>
  );
};

export default Home;
