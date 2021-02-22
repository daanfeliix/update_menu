import CreateGlobalStyle from '../styles/GlobalStyles';



function MyApp({ Component, pageProps }) {


  return (
    <>
      <CreateGlobalStyle />
      <Component {...pageProps} />
    </>
  )
}



export default MyApp
