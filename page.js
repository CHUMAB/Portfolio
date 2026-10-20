import Image from 'next/image'
import TaskList from './taskList';
import Runescape from './runescape';
import MainArea from './mainArea';
import FooterExport from './Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url("https://fonts.googleapis.com/css?family=Quicksand");
   body {
      color: red;
   }
`


export default function Home() {
  return (
    <>
    <GlobalStyle>
    <MainArea />
    </GlobalStyle>
    {/* Tasklist is not needed now, leaving here commented out */}
    {/* <TaskList /> */}
    </>
  )

  const MainHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 95vh;
    width: 95vw;
    margin-top: 8vh;
    margin-left: 5vw;
    margin-right: 5vw;
`;


}
