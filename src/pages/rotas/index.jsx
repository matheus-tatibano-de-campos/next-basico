import Link from "next/link"
import Router from "next/router"
export default function rotas() {

    function navegacaoComParams() {
        Router.push({
            pathname: "rotas/params",
            query: {
                id: 123,
                nome: "Ana"
            }
        })
    }
    return (
         <div>
            <h1>Rotas index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=ana" passHref>
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar" passHref>
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/123/Daniel" passHref>
                    <li>Daniel</li>
                </Link>
            </ul>
            <div style={{display: 'flex', flexDirection:"column", alignItems:"flex-start"}}>
                <button onClick={() => Router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={() => Router.push("/rotas/123/Daniel")}>Daniel</button>
                </div>
         </div> 
    )
}