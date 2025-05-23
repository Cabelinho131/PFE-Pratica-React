function Formulario(){
    let valor = "Ops";
    return (
        <div>
            <form action="">
                <label htmlFor="Nome">Nome:{valor?valor+"1234":"Sem valor"}</label>
                <input type="text" />
                <br />
                <label htmlFor="Email">Email:</label>
                <input type="email" />
                

            </form>
        </div>
    );
}

export default Formulario;