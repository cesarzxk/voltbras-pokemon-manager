import Document,{Html, Head,Main, NextScript} from 'next/document';
export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <title>QL Pokemon Menager</title>
                    <link rel="icon" href="voltbras logo.png"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}