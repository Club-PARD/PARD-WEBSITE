import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import PlanerImage from '../../../assets/img/Planner_parts.png'; 
import DesignerImage from '../../../assets/img/Designer_part.png';
import APPImage from '../../../assets/img/App_part.png';
import WEBImage from '../../../assets/img/Web_part.png';
import SERVERImage from '../../../assets/img/Server_part.png';

const Header7 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 14px;
  white-space: pre-line;
`;

const Header5 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Header5};
  font-weight: ${props => props.theme.fontWeights.Header5};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 19px;
  display: flex;
  justify-content: ${props => (props.textAlign === 'right' ? 'flex-end' : 'flex-start')};
  white-space: pre-line;
`;

const Body2 = styled.div`
    font-size: ${props => props.theme.Mob_fontSizes.Body2};
    font-weight: ${props => props.theme.fontWeights.Body2};
    color: #FFFFFF;
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    line-height: 140%;
    display: flex;
    position: relative;
`;

const ContentWrapper = styled.div`
    margin-bottom: 98px;
    margin-top: 4px;
    margin-left: 18px;
    display: flex;    
    flex-direction: column;
    align-items: flex-start;
    width: 243px;
    height: 199px;
`;

const Image = styled.img`
    margin-bottom: 18px;
    margin-top: -75px;
    width: 199px;
    height: 240px;
`;

const Div = styled.div`
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 375px;
    height: 2440px;
    padding-left: 35px;
    padding-right: 6px;
`;

const PartDiv = styled.div`
    flex-direction: row;
    padding-top: 45px;
    height: 2445px;
`;

const TextWrapper = styled.div`
    word-break: keep-all;
    text-align: ${props => props.textAlign === 'right' ? 'right' : 'left'};
`;
const PartWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-left: 110px;
    align-items: ${props => props.textAlign === 'left' ? 'flex-end' : 'flex-start'};
`;

const PartContents = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
    align-items: flex-start;
    margin-top: 110px;
    padding: 0;
`;

const Button1 = styled.button`
font-size: ${props => props.theme.Mob_fontSizes.Subtitle1};
font-weight: ${props => props.theme.fontWeights.Subtitle2};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    line-height: 9px;
    width: 290px;
    height: 48px;
    background-color: #7B3FEF;
    justify-content: center;
    margin-left: 15px;
    margin-top: 58px;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
`;

function PartSection(props){
    return (
        <ContentWrapper>
            <Image src={props.content.imageSrc} alt={`Image ${props.content.id}`}/>
            <TextWrapper textAlign={props.content.id === 2 || props.content.id === 4 ? 'right' : 'left'}>
                <Header5 textAlign={props.content.id === 2 || props.content.id === 4 ? 'right' : 'left'}>{props.content.title}</Header5>
                <Body2>{props.content.description}</Body2>
            </TextWrapper>
        </ContentWrapper>
    );
}

function HomePartsMob() { 
    const contentsData = [
        {
            id: 1,
            imageSrc: PlanerImage,
            title: '서비스 기획',
            description: '문제 정의부터 산출물 작성까지\n사용자 중심으로 문제를\n해결하고 프로젝트를 관리합니다.',
        },
        {
            id: 2,
            imageSrc: DesignerImage,
            title: 'UI/UX 디자인',
            description: '유저플로우에 적합한 \nUXUI 디자인 이론을 녹여 \n사용자 중심의 화면을 설계합니다.',
        },
        {
            id: 3,
            imageSrc: APPImage,
            title: '앱(APP)',
            description: '사용자를 위한 어플리케이션 \nUI를 설계하고  Flutter 기반 \n앱 서비스를 개발합니다. \n* 2기부터는 ios 기반 예정',
        },
        {
            id: 4,
            imageSrc: WEBImage,
            title: '웹(WEB)',
            description: '사용자를 위한 웹 UI를 설계하고 \n문제를 해결하는 React 기반 \n웹 서비스를 개발합니다.',
        },
        {
            id: 5,
            imageSrc: SERVERImage,
            title: '서버(SERVER)',
            description: '서비스의 핵심 비즈니스 로직과 \n데이터 흐름을 설계하고 \n인프라 구축과 배포를 담당합니다. \n* 2기부터 신설 예정',
        },
    ]
    return (
        <Div>
           <PartDiv>
            <ThemeProvider theme={theme}>
            <Header7>PARTS</Header7>
            <PartContents >
                {contentsData.map(content => (
                    <PartWrapper key={content.id} id={content.id} textAlign={content.id === 2 || content.id === 4 ? 'right' : 'left'}>
                        <PartSection content={content}></PartSection>
                    </PartWrapper>
                ))}  
            </PartContents>
            <Button1>더 알아보기</Button1>
            </ThemeProvider>
        </PartDiv> 
        
        </Div>
        
        
    );
}

export default HomePartsMob;