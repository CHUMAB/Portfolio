import Image from 'next/image'
import TaskList from './taskList';
import Runescape from './runescape';
import MainArea from './mainArea';
import FooterExport from './Footer';
import { GlobalStyle } from 'styled-components';

export default function Home() {
  return (
    <>
    <MainArea />
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
